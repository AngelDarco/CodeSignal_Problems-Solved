/* 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

    For inputString = "(bar)", the output should be
    solution(inputString) = "rab";
    For inputString = "foo(bar)baz", the output should be
    solution(inputString) = "foorabbaz";
    For inputString = "foo(bar)baz(blim)", the output should be
    solution(inputString) = "foorabbazmilb";
    For inputString = "foo(bar(baz))blim", the output should be
    solution(inputString) = "foobazrabblim".
    Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

*/

// function solution(inputString) {
//     let res = '';
//     const reverse = (str) => {
//         let res = '';
//         let res2 = '';
//         let it = false;
//         let sign = false;
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === '(') it = true
//             while (it) {

//                 i++
//                 if (str[i] === ')') {
//                     it = false;
//                     res += res2.split('').reverse().join('').replace(')', '');
//                     sign = false;
//                     res2 = ''
//                 }
//                 if (str[i] === '(') {
//                     const r = res.split('')
//                     r.splice(res.length, 0, '(')
//                     res = r.join('')
//                     res += res2
//                     res2 = ''
//                     continue;
//                 }
//                 res2 += str[i];
//             }

//             if (str[i] === ')') continue;
//             res += str[i]
//         }
//         return res
//     }

//     res = reverse(inputString);
//     for (let i = 0; i < res.length; i++) {
//         while (res[i] === '(') {
//             res = reverse(res);
//         }
//     }
//     return res;
// }


function solution(inputString) {
    while (inputString.indexOf('(') !== -1) {
      const idxStart = inputString.lastIndexOf('(');
      const idxEnd = inputString.indexOf(')', idxStart);
  
      const substr = inputString.slice(idxStart + 1, idxEnd);
      const reversedSubstr = substr.split('').reverse().join('');
  
      inputString =
        inputString.slice(0, idxStart) + reversedSubstr + inputString.slice(idxEnd + 1);
    }
  
    return inputString;
  }
  

console.time('start')
// console.log(solution('(abc)d(efg)'))
console.log(solution('foo(bar)baz'))
console.timeEnd('start')
// console.log(solution("foo(bar(baz))blim"))