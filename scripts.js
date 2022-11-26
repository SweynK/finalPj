import {amazonbtn,amexbtn,walmartbtn,applebtn,nameP,emailP,inputValue,numberP,btnsDiv,hamburger,btnmenu,mainDiv,searchBtn} from "./consts.js";
import Item from "./item.js";
function clickFn(btn){
    btn.addEventListener('click',()=>{
        fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
        .then(res => res.json())
        .then(data =>{
            const filteredArr = data.filter((el) => el.name === btn.id)
            filteredArr.forEach((el)=>{
                const item = new Item(el.id,el.name,el.email,el.boxes)
                nameP.innerHTML = `<h2>${item.name}</h2>`;
                emailP.innerText = item.email;
                inputValue.innerText = item.boxes;
                let boxesArr = item.boxes.split(',');
                let sumBoxes = boxesArr.reduce((acc,cur)=>{
                    return acc+Number(cur)
                },0)
                numberP.innerHTML =`<h2>${Math.ceil(sumBoxes/10)}</h2>`;    
            })
        })
        .catch(err =>{
            console.log(err);
        })
        hamburger.classList.toggle("active");
        btnmenu.classList.toggle("active");
        mainDiv.classList.toggle("active");
        searchBtn.classList.toggle("notActive");

    })
}
clickFn(amazonbtn);
clickFn(amexbtn);
clickFn(walmartbtn);
clickFn(applebtn);

let  btns = btnsDiv.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", ()=> {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active");
    btnmenu.classList.toggle("active");
    mainDiv.classList.toggle("active");
    searchBtn.classList.toggle("notActive");
})

























