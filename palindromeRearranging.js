function solution(inputString) {
  if (inputString.length < 1 || inputString.length > 50) return false;
  if (inputString.length <= 1) return true;
  let res = false;
  let str = [...inputString];

  for (let i = 0; i < inputString.length; i++) {
    if (res) break;
    for (let ii = 1; ii < inputString.length; ii++) {
      str[i] = inputString[ii].toLowerCase();
      str[ii] = inputString[i].toLowerCase();

      if (isPalindrome(str.join(""))) {
        res = true;
        break;
      } else res = false;
      str = [...inputString];
    }
  }
  function isPalindrome(str) {
    return str.split("").reverse().join("") === str ? true : false;
  }
  return res;
}

console.log(solution("aabb")); // true
module.exports = solution;
