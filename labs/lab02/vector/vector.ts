import {stdin as input, stdout as output} from 'process'
import * as readline from 'readline'

const ERROR_MESSAGE = 'Numbers must not contain letters, commas, more than two dots, zero cannot be the maximum number.'

main()

function main(): void {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.question('Enter several numbers in a row: ', (inputString: string) => {
        if (containsIncorrectCharacters(inputString) || handleZero(inputString)) {
            console.log(ERROR_MESSAGE)
        } else {
            outputProcessedResult(inputString)
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

function handleZero(inputString: string): boolean {
    const numberArray: number[] = transformStringArrayToNumber(inputString)
    return Math.max(...numberArray) === 0
}

function transformStringArrayToNumber(inputString: string): number[] {
    const stringArray: string[] = inputString.split(' ')
    return stringArray.map(string => parseFloat(string.trim()))
}

function divideArrayElementsByHalfMaxElem(inputString: string): number[] { // функция должна принимать массив типа number применимо ко всем
    const numberArray: number[] = transformStringArrayToNumber(inputString)
    const maxNumber: number = Math.max(...numberArray) / 2 // проверка для пустого массива
    return numberArray.map(number => Number((number / maxNumber).toFixed(3))) // должна возвращать массив строк
}

function outputProcessedResult(inputString: string): void { // имя функции
    console.log(divideArrayElementsByHalfMaxElem(inputString).join(' '))// вывести до 3 знаков после запятой тут
}

export {
    main,
    containsIncorrectCharacters,
    transformStringArrayToNumber,
    divideArrayElementsByHalfMaxElem,
    outputProcessedResult,
    handleZero,
}