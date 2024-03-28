/* Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3. */

function solution(n: number): number {
  const binaries = n.toString(2).split("0");
  const res = binaries.reduce((prev, curr) => (prev > curr ? prev : curr));
  return res.length;
}

console.log(solution(156)); // 3
