const fs = require("fs")
const jSmart = require("jsmart")

const tpl = fs.readFileSync("./src/index.tpl", { encoding: "utf-8" })
const compiledTemplate = new jSmart(tpl)

console.log(compiledTemplate.tree)

// [
//   {
//     type: 'text',
//     data: '<html>\n' +
//       '  <head>\n' +
//       '    <meta charset="UTF-8">\n' +
//       '    <title>src/index.js</title>\n' +
//       '  </head>\n' +
//       '  <body>\n' +
//       '    <p>Hello, world</p>\n' +
//       '  </body>\n' +
//       '</html>\n'
//   },
//   usedExtends: 0
// ]
