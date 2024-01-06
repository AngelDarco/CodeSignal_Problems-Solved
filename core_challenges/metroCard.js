function solution(lastNumberOfDays) {
  if (lastNumberOfDays === 31) {
    return [28, 30, 31];
  } else if (lastNumberOfDays === 30) {
    return [31];
  }
  return [31];
}

console.log(solution(28)); // 31
