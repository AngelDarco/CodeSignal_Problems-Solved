function solution(sequence) {
    if (sequence.length >= 2 && sequence.length <= 10 ** 5) {
      let x = 0;
      let res = true;
      if (x === 0 && sequence.length > 2) {
        for (let i = 1; i < sequence.length; i++) {
          if (x !== 0) break;
          if (sequence[i - 1] > sequence[i]) {
            sequence.splice(i, 1);
            x++;
          }
        }
      }
      for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] === sequence[i + 1] && sequence.length === 2) {
          return res;
          break;
        }
        if (sequence[i] >= sequence[i + 1]) {
          return !res;
          break;
        }
      }
      return res;
    }
  }
  