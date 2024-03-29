/* 
A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

Example

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
solution(crypt, solution) = true.

When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.

For crypt = ["TEN", "TWO", "ONE"] and

solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]
the output should be
solution(crypt, solution) = false.

Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes, meaning that this is not a valid solution.
*/
function solution(crypt: string[], solution: string[][]): boolean {
  const str: { [key: number]: string } = {};
  let res = true;
  for (let i = 0; i < crypt.length; i++) {
    for (let ii = 0; ii < crypt[i].length; ii++) {
      for (let j = 0; j < solution.length; j++) {
        if (crypt[i][ii] === solution[j][0]) {
          if (str[i]) str[i] += solution[j][1];
          else str[i] = solution[j][1];
        }
      }
    }
  }
  const sum = +str[0] + +str[1] !== +str[2];
  // console.log(+str[0] + +str[1] !== +str[2], sum);
  if (sum) return false;
  Object.values(str).forEach((x) => {
    if ((x[0] === "0" && x.length > 1) || sum) {
      res = false;
      return;
    }
  });
  return res;
}

console.log(
  solution(
    ["SEND", "MORE", "MONEY"],
    [
      ["O", "0"],
      ["M", "1"],
      ["Y", "2"],
      ["E", "5"],
      ["N", "6"],
      ["D", "7"],
      ["R", "8"],
      ["S", "9"]
    ]
  )
); // true

console.log(solution(["A", "A", "A"], [["A", "0"]])); // true */

console.log(solution(["AA", "AA", "AA"], [["A", "0"]])); // false
