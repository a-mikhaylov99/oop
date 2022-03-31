const matrixA = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
const matrixB = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

function multiplyMatrix(A: number[][], B: number[][]): false | any[][] {
    let rowA: number = A.length, colA: number = A[0].length,
        rowB: number = B.length, colB: number = B[0].length,
        C = []

    if (colA !== rowB) {
        return false
    }

    for (let i = 0; i < rowA; i++) {
        C[i] = []
    }

    for (let k = 0; k < colB; k++) {
        for (let i = 0; i < rowA; i++) {
            let temp = 0
            for (let j = 0; j < rowB; j++) {
                temp += A[i][j] * B[j][k]
            }
            C[i][k] = temp
        }
    }
    return C
}

console.log(multiplyMatrix(matrixA, matrixB))
