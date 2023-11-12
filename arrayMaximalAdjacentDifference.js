function solution(inputArray) {
  const count = [];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i - 1] > inputArray[i]) {
      count.push(inputArray[i - 1] - inputArray[i]);
    } else count.push(inputArray[i] - inputArray[i - 1]);
  }
  count.sort((a, b) => a - b);
  return count[count.length - 1];
}
module.exports = solution;
