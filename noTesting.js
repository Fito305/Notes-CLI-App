// import fs from 'node:fs/promises' // can use node:fs convention. Don't have to do this.
//
// const readPjson = async () => {
//    const pjsonPath = new URL('./package.json', import.meta.url).pathname
//    //   return JSON.parse(fs.readFileSync(pjsonPath, "utf-8")) // readFileSync is synchronous so it blocks code.
//    //   return JSON.parse(fs.readFile(pjsonPath, 'utf-8', /* takes a call back func*/))
//    console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8'))) // To make it work without the CB, you import and use promises (async / await)
// }
//
//
// const writeFile = async () => {
//     const newFile = new URL('./demo.js', import.meta.url).pathname
//     await fs.writeFile(newFile, `console.log("Pingon")`)
// }
//
// // readPjson()
// writeFile()
