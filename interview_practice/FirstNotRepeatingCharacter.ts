/* 
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

For s = "abacabad", the output should be
solution(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
solution(s) = '_'.

There are no characters in this string that do not repeat.
*/

function solution(s: string): string {
  const w: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) w[s[i]] = (w[s[i]] || 0) + 1;

  for (let i = 0; i < s.length; i++) {
    if (w[s[i]] === 1) return s[i];
  }

  return "_";
}

console.log(solution("abacabad")); // C
console.log(solution("abacabaabacaba")); // "_"
console.log(solution("z")); // z
