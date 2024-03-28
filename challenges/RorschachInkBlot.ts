/* 
The Rorschach inkblot test is a kind of psychological test where a seemingly meaningless patch of ink is placed on paper and then folded in half. The test subject is then supposed to interpret this patch of ink.

In this challenge, a sequence of spaces and the character o (little oh) is given as a representation of paper and ink.

Simulate "folding" this string in half, which will result in an o on one half appearing on the other half. In case both halves had o's in the same location when the "folding" occurs (that is, one o ends up on top of another o), place asterisk * characters on both halves, representing accumulated ink.

To keep things a bit simpler, in every case, the number of characters is even.

Return the string after folding as described. Do not trim or strip the string. The result must have the same length as the original.

Examples (please see test cases 1 and 2 on the right, as the two spaces have merged into one in this panel)
solution(" o ")
This is a four-character string with an o in the third position.
Folding it in half will result in an o being placed in the second position.
Return " oo "

solution(" oo ")
Suppose the result of the previous example were folded. Then the two o's will end up coinciding. Place asterisks on both positions.
Return " ** "
*/

function solution(s: string): string {
  const revArr = [...s].reverse();
  const res = new Array(s.length).fill(" ");

  for (let i = 0; i < s.length; i++) {
    if (revArr[i] === "o" && s[i] === "o") {
      res[i] = "*";
    } else if (
      (revArr[i] === " " && s[i] === "o") ||
      (s[i] === " " && revArr[i] === "o")
    ) {
      res[i] = "o";
    }
  }
  return res.join("");
}
console.log(solution("  o ")); // " oo "
console.log(solution(" oo ")); //" ** "
console.log(solution(" o   o")); // "oo  oo"
console.log(solution("  ")); // "  "
