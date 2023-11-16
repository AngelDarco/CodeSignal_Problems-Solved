function solution(inputArray) {
  let count = 1;
  let bucle = true;

  while (bucle) {
    count++;
    if (inputArray[0] % count >= 1 && loop(inputArray, count)) bucle = false;
  }

  function loop(arr, divisor) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) {
        res.push(i);
      }
    }
    return res.length >= 1 ? false : true;
  }
  return count;
}
module.exports = solution;
console.log(solution([5, 8, 9, 13, 14])); // 6
console.log(solution([1000, 999])); // 6
