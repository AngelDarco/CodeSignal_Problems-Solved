/* 
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example

For a = 2 and b = 7, the output should be
solution(a, b) = 11.

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
*/

function solution(a: number, b: number): number {
  const arr = new Array(b - a + 1).fill(0).map((_, i) => a + i);
  const bins = arr.map((num) => num.toString(2));
  const res = bins
    .map((num) => num.match(/1/g)?.length || 0)
    .reduce((prev, curr) => prev + curr);
  return res;
}

console.log(solution(2, 7)); //  11
console.log(solution(1, 10)); // 17
console.log(solution(0, 1)); // 1
