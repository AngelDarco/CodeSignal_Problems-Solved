/* 
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

solution(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

function solution(a: number[][]): number[][] {
  /*   const res = [];
  let j = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let c = a[i].length - 1;
    const row = [];
    for (let ii = 0; ii < a[i].length; ii++) {
      if (c >= 0) row.push(a[c][j]);
      c--;
    }
    j++;
    res.push(row);
  }
  return res; 
  
  function solution(a: number[][]): number[][] {
    return a.map((arr, i) => {return arr.map((x, j) => {return a[j][i];}).reverse();});
}
  */
  const res = [];
  for (let i = 0; i < a.length; i++) {
    let arr = [];
    for (let ii = 0; ii < a[i].length; ii++) {
      arr.push(a[ii][i]);
    }
    res.push(arr.reverse());
  }

  return res;
}
console.log(
  solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
); // [[7, 4, 1],
//    [8, 5, 2],
//    [9, 6, 3]]
