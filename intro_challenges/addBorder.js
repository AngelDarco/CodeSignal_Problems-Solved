/* 
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]

the output should be

solution(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                     "*****"]
*/

function solution(picture) {
    res = [];
    [ arrOne ] = picture;
    letter = '*'+arrOne+'*'
    for (let i = -1; i < picture.length+1; i++) {
        str = '';
        for (let ii = 0; ii < letter.length; ii++) {
            picture[i] ? str += picture[i][ii-1] || '*' : str += '*';
        }
        res.push(str)
    }
    return res
}

console.log(solution(["abc","ded"]));