import readline from 'readline'
import {stdin as input, stdout as output} from 'process'

main()

type htmlCharacter = {
    symbol: string
    value: string
}

const characters: htmlCharacter[] = [
    {
        symbol: '&', //амперсанд должен обрабатываться в первую очередь
        value: '&amp;',
    },
    {
        symbol: '"',
        value: '&quot;',
    },
    {
        symbol: '\'',
        value: '&apos;',
    },
    {
        symbol: '<',
        value: '&lt;',
    },
    {
        symbol: '>',
        value: '&gt;',
    },
]
const EXIT = 'exit'

function main() {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.on('line', (inputString: string) => {
        if (inputString === EXIT) {
            readLine.close()
        } else {
            console.log(encodeHtml(inputString))
        }
    })
}

function encodeHtml(inputString: string): string {
    let encodeString: string
    for (const character of characters) {
        encodeString = inputString.replaceAll(character.symbol, character.value)
        inputString = encodeString
    }
    return inputString
}

export {
    encodeHtml,
}
