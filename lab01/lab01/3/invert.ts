import * as fs from 'fs'

// function readFile(filePath: string) {
//     const files: string[][] = []
//     const file: string[] = fs.readFileSync(filePath, 'utf-8').split('\r\n')
//     for (let i = 0; i < file.length; i++) {
//         files.push(file)
//     }
//     return files
// }

function readFileToArray(filePath: string) {
    return fs.readFileSync(filePath, 'utf-8').split('\r\n')
}

console.log(readFileToArray('fill.txt'))




