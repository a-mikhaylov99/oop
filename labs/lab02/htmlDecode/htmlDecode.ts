import readline, {createInterface} from 'readline'
import {stdin as input, stdout as output} from 'process'

type HtmlCharacter = {
    symbol: string
    value: string
}

const characters: HtmlCharacter[] = [
    {
        symbol: '<',
        value: '&lt;',
    },
    {
        symbol: '"',
        value: '&quot;',
    },
    {
        symbol: `'`,
        value: '&apos;',
    },
    {
        symbol: '>',
        value: '&gt;',
    },
    {
        symbol: '&', //амперсанд должен обрабатываться в последнюю очередь
        value: '&amp;',
    },
]

const EXIT = 'exit'
const MESSAGE_WELCOME_INPUT = 'Enter string to decode. Enter "exit" to close app.'
const MESSAGE_INVALID_INPUT = `Invalid value in input. String shouldn't be empty.`
const MESSAGE_TO_OUTPUT = 'Decoded string: '

function main(): void {
    const readLineInterface: readline.Interface = createInterface({input, output})
    console.log(MESSAGE_WELCOME_INPUT)
    readLineInterface.on('line', (line: string) => {
        if (line === EXIT) {
            readLineInterface.close()
        } else if (line) {
            const decodedString: string = decodeHtml(line)
            console.log(`${MESSAGE_TO_OUTPUT}${decodedString}`)
        } else {
            console.log(MESSAGE_INVALID_INPUT)
        }
    })
}

function decodeHtml(inputString: string): string {
    let decodedString = inputString
    for (const character of characters) {
        decodedString = decodedString.replaceAll(character.value, character.symbol)
    }
    return decodedString
}

main()

export {
    decodeHtml,
}