const BINARY_NUMBER_SYSTEM = 2
const MESSAGE_CALL_APP_WITH_TWO_ARGUMENTS = 'Call app with 2 arguments'
const MESSAGE_NON_BINARY_NUMBER = 'The number is not in binary notation'

function convertToBase(binaryNumber: number): number {
    let resultNumber = 0
    while (binaryNumber !== 0) {
        resultNumber = binaryNumber % BINARY_NUMBER_SYSTEM
        binaryNumber /= BINARY_NUMBER_SYSTEM
    }
    return resultNumber
}

function checkBinaryNumber(number: string): number | undefined {
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== '1' && number[i] !== '0') {
            console.log(MESSAGE_NON_BINARY_NUMBER)
            return
        }
    }
    return convertToBase(Number(number))
}// функция должна и проверять stringToNumber

function runBinaryToDecimalProgram(argv: string[]): void {
    if (argv.length !== 3) {
        console.log(MESSAGE_CALL_APP_WITH_TWO_ARGUMENTS)
        return
    }
    const binaryNumber: number | undefined = checkBinaryNumber(argv[2])
    if (binaryNumber) {
        console.log(binaryNumber)
    }
}

runBinaryToDecimalProgram(process.argv)