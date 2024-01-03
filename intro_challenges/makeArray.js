function solution(statues) {
    let x = 0;
    let res = 0;
    if (statues.length >= 1 && statues.length <= 10) {
        if (statues[0] >= 0 && statues[statues.length - 1] <= 20) {
            const arr = statues.sort(function (a, b) { return a - b; });
            for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
                if (arr[x] === undefined) res++
                x++
            }
        }
    }
    return res
}

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.