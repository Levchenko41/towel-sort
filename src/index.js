
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr2 = [];
  let k = 0;
  if (!matrix) { return arr2 }
  for (i = 0; i < matrix.length; i++) {
    let v = matrix[i].length - 1;
    for (j = 0; j < matrix[i].length; j++) {

      if (i % 2 == 0 || i == 0) {
        arr2.push(matrix[i][j]);
      }
      else {
        arr2.push(matrix[i][v]);
      }
      k++;
      v--;
    }

  } console.log(arr2);

  return arr2;
}
