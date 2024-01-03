/* 
Given two strings, find the number of common characters between them.

Example
For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(s1, s2) {
    let res = null;
    function resolve(s1, s2) {
        let res = 0;
        for (let i = 0; i < s1.length; i++) {
            for (let ii = 0; ii < s2.length; ii++) {
                if (s1[i] === s2[ii]) {
                    s2.splice(ii, 1);
                    res++;
                    break;
                }
            }
        }
        return res;
    }
    if (s1.length > s2.length) {
        const s2Arr = s2.split('');
        res = resolve(s1, s2Arr);
    }
    else {
        const s1Arr = s1.split('');
        res = resolve(s2, s1Arr);
    }
    return res;
}

const s1 = "aabcc";
const s2 = "adcaa"

console.log(solution(s1,s2));