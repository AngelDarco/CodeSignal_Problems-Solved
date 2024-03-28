/* 
You're watching your little cousin Pethunya play with small wooden cubes, which she uses to form a wall-like structure made of several columns all lined up.

Each column is made up of a variable amount of cubes. They are not that stable when piled up, so if a tall column has cubes that are not supported on at least one side, they will eventually fall (in other words, cubes that are above the tallest neighbor's height will fall).

Given the number of cubes in each of Pethunya's columns of cubes, determine how many cubes will fall down.

All columns have at least 1 cube.

Examples:
solution([1, 2, 3, 3, 2])
In this case, the two tallest columns of size 3 support each other, so no cubes will fall. Return 0.

solution([1, 1, 3, 2, 1])
The middle column's supporting neighbors have size 1 and 2, so the cube above height 2 (its taller neighbor) will fall. Return 1.

solution([3, 1, 3, 2, 1])
The first column only has 1 cube to the right, so it loses 2 cubes. The middle column has a the taller neighboring column of size 2 to the right, so it loses 1 cube. Return the total, 3.
*/
function solution(cols: number[]): number {
  let res = 0;
  for (let i = 0; i < cols.length; i++) {
    if (cols[i - 2] === undefined && cols[i - 1] > cols[i])
      res += cols[i - 1] - cols[i];
    if (cols[i - 2] < cols[i - 1] && cols[i - 1] > cols[i])
      res +=
        cols[i - 2] > cols[i]
          ? cols[i - 1] - cols[i - 2]
          : cols[i - 1] - cols[i];
    if (cols[i - 1] < cols[i] && i + 1 === cols.length)
      res += cols[i] - cols[i - 1];
  }
  return res;
}

console.log(solution([1, 2, 3, 3, 2])); // 0
console.log(solution([3, 1, 3, 2, 1])); //3
console.log(solution([9, 7, 5, 7, 9, 3, 2, 1, 3, 1, 3, 5])); // 8
console.log(solution([1, 1, 3, 2, 1])); // 1
