function solution(n: number, k: number) {
  return n & ~(1 << (k - 1));
}

console.log(solution(37, 3)); // Output 33

console.log(solution(2147483647, 16)); // Output 2147450879
