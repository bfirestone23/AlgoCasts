// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let counter = 1;

    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;

    while (startRow <= endRow && startCol <= endRow) {
        //top row
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //right col
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        //bottom row
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //left col
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}

console.log(matrix(3));

module.exports = matrix;






// function matrix(n) {
//     let results = [];

//     for (let i = 0; i < n; i++) {
//         results.push([]);
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;

//     while (startColumn <= endColumn && startRow <= endRow) {
//         //Top Row aka startRow
//         for(let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;

//         //Right column aka endColumn
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;

//         //Bottom row aka endRow
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;

//         //Left column aka startColumn
//         for (let i = endRow; i >= startRow; i--) {
//             results[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }

//     return results;
// }
