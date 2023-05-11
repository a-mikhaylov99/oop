import readline from 'readline'
import {stdin as input, stdout as output} from 'process'

const EXIT = 'exit'
const MESSAGE_INVALID_INPUT = `Invalid value in input`

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

function getWordsCount(words: string[]): Map<string, number> {
    let count: number
    const wordsCount: Map<string, number> = new Map([])
    words.map((word: string) => {
        if (!wordsCount.has(word)) {
            wordsCount.set(word, 0)
        }
        count = wordsCount.get(word)!
        count++
        wordsCount.set(word, count)
    })
    return wordsCount
}

function printRateOccurrenceWords(wordsCount: Map<string, number>): void {
    if (wordsCount.size === 0) {
        console.log(MESSAGE_INVALID_INPUT)
        return
    }
    for (const element of wordsCount) {
        console.log(element)
    }
}

function main(): void {
    const readLineInterface: readline.Interface = readline.createInterface({input, output})
    //подсчитать частоту всех слов даже если в несколько строк
    console.log('Enter the line: ')
    readLineInterface.on('line', (inputString: string) => {
        if (inputString === EXIT) {
            readLineInterface.close()
        } else if (inputString) {
            const inputStringArray: string[] = stringToArray(inputString)
            const wordsCount: Map<string, number> = getWordsCount(inputStringArray)
            printRateOccurrenceWords(wordsCount)
        } else {
            console.log(MESSAGE_INVALID_INPUT)
        }
    })
}

main()

export {
    stringToArray,
    getWordsCount,
    printRateOccurrenceWords,
}