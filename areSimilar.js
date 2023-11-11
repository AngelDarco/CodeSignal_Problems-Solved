function solution(a, b) {
  if (a.length <= 100000 && a.length >= 3 && a.length === b.length) {
    const similar = [];
    if (JSON.stringify(a) === JSON.stringify(b)) return true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) similar.push(i);
    }
    return similar.length === 2 &&
      a[similar[0]] === b[similar[1]] &&
      a[similar[1]] === b[similar[0]]
      ? true
      : false;
  } else return false;
}

console.log(solution([2, 3, 1], [1, 3, 2]));
module.exports = solution;
