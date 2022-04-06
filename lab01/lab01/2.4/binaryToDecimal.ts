const BINARY_NUMBER_SYSTEM = 2
const MESSAGE_CALL_APP_WITH_TWO_ARGUMENTS = 'Call app with 3 arguments'
const MESSAGE_NON_BINARY_NUMBER = 'The number is not in binary notation'

function convertToBase(binaryNumber: string, base: number): null | number {
    const parsed: number = parseInt(binaryNumber, base)
    return isNaN(parsed) ? null : parsed
}

function checkBinaryNumbers(number: string, base: number): number {
    const binary: number = convertToBase(number, base)
    for (let i = 0; i < number.length; i++) {
        if (number[i] === '1' || number[i] === '0') {
            continue
        }
        console.log(MESSAGE_NON_BINARY_NUMBER)
        break
    }
    return binary // разбить проверку и перевод из 3 сс в 10 сс
}

function runBinaryToDecimalProgram(): void {
    if (process.argv.length == 3) {
        console.log(checkBinaryNumbers(process.argv[2], BINARY_NUMBER_SYSTEM))
    } else {
        console.log(MESSAGE_CALL_APP_WITH_TWO_ARGUMENTS)
    }
}

runBinaryToDecimalProgram()