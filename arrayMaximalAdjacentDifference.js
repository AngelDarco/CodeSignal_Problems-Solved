function solution(inputArray) {
  const res = [];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i - 1] > inputArray[i]) {
      res.push(inputArray[i - 1] - inputArray[i]);
    } else res.push(inputArray[i] - inputArray[i - 1]);
  }
  res.sort((a, b) => a - b);
  return res[res.length - 1];
}
module.exports = solution;
