import {stdin as input, stdout as output} from 'process'
import * as readline from 'readline'

const ERROR_MESSAGE = 'Numbers must not contain letters, commas, more than two dots or more than two cons in a row'

main()

function main(): void {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.question('Enter several numbers in a row: ', (array: string) => {
        if (containsIncorrectCharacters(array)) {
            errorOutput(new Error(ERROR_MESSAGE))
        } else {
            transformStringToArray(array)
            transformStringArrayToNumber(array)
            processArray(array)
            outputResult(array)
        }
        readLine.close()
    })
}

function containsIncorrectCharacters(str: string): boolean {
    let searchResult: boolean
    const stringArray: string[] = transformStringToArray(str)
    for (const string of stringArray) {
        searchResult = !string.match(/^-?(?:\.\d+|\d+\.?\d*)$/)
    }
    return searchResult
}

function transformStringToArray(str: string): string[] {
    return str.split(' ')
}

function transformStringArrayToNumber(str: string): number[] {
    const numberArray: number[] = []
    const stringArray: string[] = transformStringToArray(str)
    for (const string of stringArray) {
        if (string) {
            numberArray.push(parseFloat(string))
        }
    }
    return numberArray
}

function processArray(str: string): number[] {
    const numberArray: number[] = transformStringArrayToNumber(str)
    const maxNumber: number = Math.max(...numberArray) / 2
    const resultArray: number[] = []
    for (const number of numberArray) {
        resultArray.push(Number((number / maxNumber).toFixed(3)))
    }
    return resultArray
}

function outputResult(str: string): void {
    console.log(processArray(str).toString())
}

function errorOutput(error: Error): void {
    console.log(error.message)
}

export {
    main,
    containsIncorrectCharacters,
    transformStringToArray,
    transformStringArrayToNumber,
    processArray,
    outputResult,
    errorOutput,
}