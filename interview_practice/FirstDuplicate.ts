/* 
Given an array array that contains only numbers in the range from 1 to array.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/
function solution(a: number[]): number {
  const res: { [key: string]: number } = {};
  for (let i = 0; i < a.length; i++) {
    res[a[i]] = (res[a[i]] || 0) + 1;
    if (res[a[i]] > 1) return a[i];
  }

  return -1;
}

console.log(solution([2, 1, 3, 5, 3, 2])); // 3
console.log(solution([])); // -1
console.log(solution([2, 4, 3, 5, 1])); // -1
console.log(solution([5, 5, 5, 5, 5])); // 5

console.log(solution([8, 4, 6, 2, 6, 4, 7, 9, 5, 8])); //6

console.log(solution([1, 1, 2, 2, 1])); // 1
