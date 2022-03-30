const matrixA = [[1,2,3], [1,2,3], [1,2,3]]
const matrixB = [[1,1,1], [1,1,1], [1,1,1]]

function multiplyMatrix(A: number[][], B: number[][]): false | any[][] {
    let rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) {
        return false
    }
    for (let i = 0; i < rowsA; i++) {
        C[i] = [];
    }
    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let temp = 0
            for (let j = 0; j < rowsB; j++) temp += A[i][j] * B[j][k];
            C[i][k] = temp
        }
    }
    return C;
}

console.log(multiplyMatrix(matrixA, matrixB))
