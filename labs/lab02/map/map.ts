import readline from 'readline'
import {stdin as input, stdout as output} from 'process'

main()

function main(): void {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.question('Enter several numbers in a row: ', (inputString: string) => {
        const inputStringArray: string[] = stringToArray(inputString)
        const countCharacters = countsCharacters(inputStringArray, inputString)
        printArray(countCharacters)
        readLine.close()
    })
}


function stringToArray(inputString: string): string[] {
    let array: string[] = []
    const stringArray = inputString.split(' ')
    for (const string of stringArray) {
        if (string) {
            array.push(string)
        }
    }
    return array
}

function countsCharacters(stringArray: string[], word: string): number[] {
    return stringArray.map(string => string.search(word))
}

function printArray(numberArray: number[]): void {
    for (const number of numberArray) {
        console.log(number)
    }
}