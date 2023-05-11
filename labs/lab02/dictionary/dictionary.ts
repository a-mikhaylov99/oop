import readline, {createInterface} from 'readline'
import {stdin as input, stdout as output} from 'process'

const dictionary: Map<string, string[]> = new Map([
    ['cat', ['кот']],
    ['meat', ['мясо']],
])

const EXIT = 'exit'
const MESSAGE_WELCOME_INPUT = 'Enter string to decode. Enter "exit" to close app.'
const MESSAGE_INVALID_INPUT = `Invalid value in input. String shouldn't be empty.`
const MESSAGE_TO_OUTPUT = 'Decoded string: '

function translateWord(word: string) {
    if (dictionary.has(word)) {
        printMessage(dictionary.get(word)?.find(x => x))
    }
}

function addWord(word: string, dictionary: Map<string, string[]>) {
    let newWord = ''
    if (word === '') {
        printMessage(`Слово “${word}” проигнорировано.`)
        return
    }
    printMessage(`Неизвестное слово “${word}”. Введите перевод или пустую строку для отказа`)
    newWord = word
    dictionary.set(word, [newWord])
    printMessage(`Cлово “${word}”. сохранено в словаре как “${newWord}”.`)
}

function printMessage(message: string | undefined): void {
    if (message) {
        console.log(message)
        return
    }
    return
}

function main(): void {
    printMessage(MESSAGE_WELCOME_INPUT)
    const readLineInterface: readline.Interface = createInterface({input, output})
    readLineInterface.on('line', (line: string) => {
        if (line === EXIT) {
            readLineInterface.close()
        } else if (line) {
            translateWord(line)
        } else {
            printMessage(MESSAGE_INVALID_INPUT)
        }
    })
}

main()