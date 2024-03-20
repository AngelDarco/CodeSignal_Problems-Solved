/* 
A recursive acronym refers to itself, that is, the first word is the acronym itself.

Given a string of words (only A-Z are used), return true if it's a recursive acronym, and false otherwise.

Example:

solution("PHP HYPERTEXT PREPROCESSOR")
True, because the entire string is shortened to PHP, and is equal to the first word.

solution("INTERNATIONAL BUSINESS MACHINES")
False, because the entire string is shortened to IBM, but the first word is INTERNATIONAL. */

function solution(fullName: string): boolean {
  const strArr = fullName.split(" ");
  const acronym = strArr[0];

  if (acronym.length !== strArr.length) return false;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][0] !== acronym[i]) return false;
  }
  // console.log(strArr, acronym);
  return true;
}

console.log(solution("PHP HYPERTEXT PREPROCESSOR")); // true

console.log(solution("INTERNATIONAL BUSINESS MACHINES")); // false
