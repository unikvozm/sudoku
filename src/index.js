module.exports = function solveSudoku(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0) continue;

      // trying to guess the number
      for (let k = 1; k <= 9; k++) {
        if (
          checkRow(matrix[i], k) &&
          checkCol(matrix, j, k) &&
          check3x3(matrix, i, j, k)
        ) {
          matrix[i][j] = k;

          if (solveSudoku(matrix)) return matrix; // the end

          matrix[i][j] = 0; // try the next number
        }
      }
      return false;
    }
  }
  // if no more 0s in the matrix
  return true;
};

const checkRow = (row, k) => {
  return row.every(element => element !== k);
};

const checkCol = (matrix, col, k) => {
  return matrix.every(row => row[col] !== k);
};

const check3x3 = (matrix, row, col, k) => {
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  return (
    matrix[startRow][startCol] !== k &&
    matrix[startRow][startCol + 1] !== k &&
    matrix[startRow][startCol + 2] !== k &&
    matrix[startRow + 1][startCol] !== k &&
    matrix[startRow + 1][startCol + 1] !== k &&
    matrix[startRow + 1][startCol + 2] !== k &&
    matrix[startRow + 2][startCol] !== k &&
    matrix[startRow + 2][startCol + 1] !== k &&
    matrix[startRow + 2][startCol + 2] !== k
  );
};
