const MATRIX_SIZE = 3
const matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

function calculateDeterminant(matrix: number[][], matrixSize: number) {
    let matrixDeterminant = 0
    if (matrixSize === 1) {
        matrixDeterminant = matrix[0][0]
    } else if (matrixSize === 2) {
        matrixDeterminant = matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]

    } else {
        matrixDeterminant += matrix[0][0] * matrix[1][1] * matrix[2][2]
        matrixDeterminant += matrix[0][1] * matrix[1][2] * matrix[2][0]
        matrixDeterminant += matrix[0][2] * matrix[1][0] * matrix[2][1]
        matrixDeterminant -= matrix[0][2] * matrix[1][1] * matrix[2][0]
        matrixDeterminant -= matrix[0][0] * matrix[1][2] * matrix[2][1]
        matrixDeterminant -= matrix[0][1] * matrix[1][0] * matrix[2][2]
    }

    return matrixDeterminant
}

console.log(calculateDeterminant(matrix, MATRIX_SIZE))