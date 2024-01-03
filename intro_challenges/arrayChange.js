function solution(inputArray) {
  let res = 0;
  const arr = [...inputArray];

  for (let i = 1; i < inputArray.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr[i] += 1;
      res++;
    } else if (arr[i] < arr[i - 1]) {
      while (arr[i - 1] + 1 > arr[i]) {
        res++;
        arr[i] += 1;
      }
    }
  }
  return res;
}
module.exports = solution;

console.log(solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); // 13
