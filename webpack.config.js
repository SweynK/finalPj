const path = require("path");

module.exports = {
    entry : './scripts.js',
    output : {
        path:path.resolve(__dirname,'./dist.js'),
        filename: 'bundle.js'
    }
}