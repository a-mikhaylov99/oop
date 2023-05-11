import {stdin as input, stdout as output} from 'process'
import * as readline from 'readline'

const ERROR_MESSAGE = 'Numbers must not contain letters, commas, more than two dots, zero cannot be the maximum number.'

main()

function main(): void {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.question('Enter several numbers in a row: ', vector())
    readLine.close()
}

function vector(): (inputString: string) => void {
    return (inputString: string) => {
        const stringArray: string[] = transformStringToArray(inputString)
        const numberArray: number[] = transformStringArrayToNumber(stringArray)
        if (containsIncorrectCharacters(inputString) || isZeroMaxElement(numberArray)) {
            console.log(ERROR_MESSAGE)
            return
        }
        const dividedArray: number[] = divideArrayElementsByHalfMaxElem(numberArray)
        printArray(dividedArray)
    }
}

function containsIncorrectCharacters(inputString: string): boolean {
    let isExistCorrectCharacter: boolean
    const stringArray: string[] = inputString.split(' ')
    for (const string of stringArray) {
        isExistCorrectCharacter = !string.match(/^[+-]?([0-9]*\.)?[0-9]+$/)
    }
    // @ts-ignore
    return isExistCorrectCharacter
}

function isZeroMaxElement(numberArray: number[]): boolean {
    return Math.max(...numberArray) === 0
}

function transformStringToArray(inputString: string): string[] {
    const stringArray: string[] = inputString.split(' ')
    return stringArray.filter(string => string)
}

function transformStringArrayToNumber(stringArray: string[]): number[] {
    const num: number[] = []
    for (const string of stringArray) {
        num.push(parseFloat(string))
    }
    return num
    // return stringArray.map(string => parseFloat(string))
}

function divideArrayElementsByHalfMaxElem(numberArray: number[]): number[] {
    let numbers: number[] = []
    for (const number of numberArray) {
        const maxNumber: number = Math.max(...numberArray) / 2
        numbers = numberArray.map(number => (number / maxNumber))
    }
    return numbers
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
    isZeroMaxElement,
    transformStringToArray,
}