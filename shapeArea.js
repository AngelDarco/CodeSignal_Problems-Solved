function solution(n) {
    let a = 1
    for (let i = 1; i <= n; i++){
        const b = (4 * i) - 4
        a += + b
    }
    return a
}