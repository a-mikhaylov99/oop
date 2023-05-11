import * as fs from 'fs'

const NO_SUCH_FILE = 'ENOENT'
const MESSAGE_CALL_APP_WITH_ARGUMENTS = `Call app with 2 arguments <file name> <text to search>`
const MESSAGE_TEXT_NOT_FOUND = 'Text not found'
const MESSAGE_TEXT_FOUND_ON_FOLLOWING_LINES = 'Text found on the following lines:'
const MESSAGE_NO_SUCH_FILE = 'No such file or directory'
const MESSAGE_SOME_ERROR = 'Some error'

function readFile(inputFileName: string): string {
    return fs.readFileSync(inputFileName, 'utf-8')
}

function printLineNumbers(result: number[]): void {
    if (result.length > 0) {
        console.log(MESSAGE_TEXT_FOUND_ON_FOLLOWING_LINES)
        result.forEach((value: number) => console.log(value + 1))
    } else {
        console.log(MESSAGE_TEXT_NOT_FOUND)
    }
}

function handleError(error: NodeJS.ErrnoException): void {
    if (error.code && error.code === NO_SUCH_FILE) {
        console.log(MESSAGE_NO_SUCH_FILE)
    } else {
        console.log(MESSAGE_SOME_ERROR)
    }
}

function findStringOccurrences(fileContent: string, searchString: string): number[] {
    const lineNumbers: number[] = []
    const lineList: string[] = fileContent.split('\n')
    lineList.forEach((string: string, index: number) => {
        if (string.includes(searchString)) {
            lineNumbers.push(index)
        }
    })
    return lineNumbers
}

function find(argv: string[]): void {
    try {
        if (argv.length !== 4) {
            console.log(MESSAGE_CALL_APP_WITH_ARGUMENTS)
            return
        }
        const content: string = readFile(argv[2])
        const result: number[] = findStringOccurrences(content, argv[3])
        printLineNumbers(result)
    } catch (error) {
        handleError(error)
    }
}

find(process.argv)