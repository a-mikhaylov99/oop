import * as fs from 'fs'

const matrix = [[1, 2, 3], [4, 5, 6], [7, 111, 10]]

function readFile(file: string): string {
    return fs.readFileSync(file, 'utf-8')
}

function calculateDeterminant(matrix: number[][]) {
    let matrixDeterminant = 0
    matrixDeterminant += matrix[0][0] * matrix[1][1] * matrix[2][2]
    matrixDeterminant += matrix[0][1] * matrix[1][2] * matrix[2][0]
    matrixDeterminant += matrix[0][2] * matrix[1][0] * matrix[2][1]
    matrixDeterminant -= matrix[0][2] * matrix[1][1] * matrix[2][0]
    matrixDeterminant -= matrix[0][0] * matrix[1][2] * matrix[2][1]
    matrixDeterminant -= matrix[0][1] * matrix[1][0] * matrix[2][2]
    return matrixDeterminant
}

console.log(calculateDeterminant(matrix))