import {stdin as input, stdout as output} from 'process'
import * as readline from 'readline'

const ERROR_MESSAGE = 'Numbers must not contain letters, commas, more than two dots, zero cannot be the maximum number.'

main()

function main(): void {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.question('Enter several numbers in a row: ', (inputString: string) => {
        const stringArray: string[] = stringToArray(inputString)
        const numberArray: number[] = transformStringArrayToNumber(stringArray)
        if (containsIncorrectCharacters(inputString) || handleZero(numberArray)) {
            handleError(new Error(ERROR_MESSAGE))
        } else {
            const divArray: number[] = divideArrayElementsByHalfMaxElem(numberArray)
            printArray(divArray)
        }
        readLine.close()
    })
}

function containsIncorrectCharacters(inputString: string): boolean {
    let isExistCorrectCharacter: boolean
    const stringArray: string[] = inputString.split(' ')
    for (const string of stringArray) {
        isExistCorrectCharacter = !string.match(/^[+-]?([0-9]*\.)?[0-9]+$/)
    }
    return isExistCorrectCharacter
}

function handleZero(numberArray: number[]): boolean {
    return Math.max(...numberArray) === 0
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

function transformStringArrayToNumber(stringArray: string[]): number[] {
    return stringArray.map(string => parseFloat(string.trim()))
}

function divideArrayElementsByHalfMaxElem(numberArray: number[]): number[] {
    let numbers: number[] = []
    for (const number of numberArray) {
        if (!isNaN(number)) {
            const maxNumber: number = Math.max(...numberArray) / 2
            numbers = numberArray.map(number => (number / maxNumber))
        }
    }
    return numbers
}

function handleError(error: Error): void {
    console.log(error.message)
}

function printArray(numbers: number[]): void {
    for (const number of numbers) {
        console.log(number.toFixed(3))
    }
}


export {
    main,
    containsIncorrectCharacters,
    transformStringArrayToNumber,
    divideArrayElementsByHalfMaxElem,
    printArray,
    handleZero,
    stringToArray,
}