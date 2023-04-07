/* 
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Input 
a: [-1, 150, 190, 170, -1, -1, 160, 180]

Expected Output:
[-1, 150, 160, 170, -1, -1, 180, 190]

*/

function solution(a){
    const res = [];
    const store = [...a];
    const as = a.sort((a,b)=>a-b).filter(i => i !== -1);
    let c = 0;

    for (let i = 0; i < store.length; i++) {    
        if(store[i] === -1) res.push(store[i]);
        else {
        res.push(as[c]);
        c++;
        }
    }
return res;
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));