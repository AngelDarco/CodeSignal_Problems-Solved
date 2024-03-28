/* 
Having missed the Community Challenge of the Month because you went mountain biking for the weekend and had a long day at work on Monday, you now find yourself clicking on "RangeLite".

RangeLite gives you a list of integers (not necessarily in order), and a range's endpoints, a and b. a is always less than b.

Return the number of integers from the list that belong to the range (it includes both endpoints).

Example:
solution([3, 5, 2, 9, 1], 2, 5)
The range is 2 to 5, more precisely, [2, 3, 4, 5]. The numbers 3, 5, and 2 are in this range.
Return 3.
*/

function solution(int: number[], a: number, b: number): number {
  return int.filter((x) => x >= a && x <= b).length;
}

console.log(solution([3, 5, 2, 9, 1], 2, 5)); // 3
console.log(solution([3, 5, 2, 9, 1], 10, 20)); // 0
console.log(solution([3, 5, 2, 9, 1], 2, 5)); // 3
