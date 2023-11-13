function solution(inputString) {
  const ip = inputString.split(".");
  let res = [];
  // regex to validate ip address format
  const rgx = new RegExp(/^(?:0|1?\d\d?|2[0-4]\d|25[0-5])$/);
  for (let i = 0; i < ip.length; i++) {
    if (
      !rgx.test(ip[i]) ||
      ip.length > 4 ||
      ip.length < 4 ||
      (ip[i].length > 1 && ip[i][0] === "0")
    ) {
      res.push(i);
      break;
    }
  }
  return res.length > 0 ? false : true;
}
module.exports = solution;
console.log(solution("1a.0.142.86")); // false
