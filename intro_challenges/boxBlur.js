function solution(image) {
  let len = image.length,
    count = 0;

  while (len >= 0) {
    let res = 0;
    len -= 3;

    for (let i = count; i < count + 3; i++) {
      // const element = image[i];
      res = findBoxes(image[i]);
      console.log(res);
    }
    count++;
  }

  function findBoxes(arr) {
    let res = 0;
    for (let i = 0; i < 3; i++) {
      res += arr[i];
    }
    return res;
  }
  //return [];
}
const image = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0]
];
console.log(solution(image));
module.exports = solution;
