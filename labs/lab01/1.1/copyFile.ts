import * as fs from 'fs'

const SOME_ERROR = 'No such file or directory, open'
const MESSAGE_CALL_APP_WITH_TWO_ARGUMENTS = 'Call app with 3 arguments'

function readFile(inputFileName: string): string {
    try {
        return fs.readFileSync(inputFileName, 'utf-8')
    } catch (error) {
        throw new Error(SOME_ERROR)
    }
}

function writeFile(outputFileName: string, inputFileContent: string): void {
    try {
        return fs.writeFileSync(outputFileName, inputFileContent)
    } catch (error) {
        throw new Error(SOME_ERROR)
    }
}


function copyFile(inputFileName: string, outputFileName: string): void {
    try {
        const inputFileContent: string = readFile(inputFileName)
        return writeFile(outputFileName, inputFileContent)
    } catch (error) {
        handleError(error)
    }
}

function handleError(error: Error): void {
    console.log(error.message)
}

function runCopyFileProgram(): void {
    try {
        if (process.argv.length === 4) {
            copyFile(process.argv[2], process.argv[3])
        } else {
            throw new Error(MESSAGE_CALL_APP_WITH_TWO_ARGUMENTS)
        }
    } catch (error) {
        handleError(error)
    }
}

runCopyFileProgram()

