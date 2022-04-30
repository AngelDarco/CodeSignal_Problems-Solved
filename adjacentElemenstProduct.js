function solution(inputArray) {
    arr = [];
    for(let i = 0; i < inputArray.length-1; i++){
        arr.push(inputArray[i]*inputArray[i+1])
    }

    sort = arr.sort()
    res = sort[0];
    for(let i = 0; i < arr.length; i++){
        if(res < arr[i]) res = arr[i]
    }
    return res;
}