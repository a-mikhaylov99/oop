import readline from 'readline'
import {stdin as input, stdout as output} from 'process'

main()

type htmlCharacter = {
    symbol: string
    value: string
}

const characters: htmlCharacter[] = [
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
    {
        symbol: '&',
        value: '&amp;',
    },
]

function main() {
    const readLine: readline.Interface = readline.createInterface({input, output})
    readLine.question('Enter several numbers in a row: ', (array: string) => {
        readLine.close()
    })
}

function decode(strings: string) {
    for (const stringsKey of strings) {
        for (const character of characters) {
            if(stringsKey === character.symbol) {
                strings.replace(stringsKey, character.value)
            }
        }
    }
}
