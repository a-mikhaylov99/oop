import * as fs from 'fs'

function copyFile(fileNumberOne: string, fileNumberTwo: string) {
    let fileOne: string = fs.readFileSync(fileNumberOne, 'utf-8')
    return fs.writeFileSync(fileNumberTwo, fileOne)
}

let fileOne: string = process.argv[2]
let fileTwo: string = process.argv[3]

copyFile(fileOne, fileTwo)