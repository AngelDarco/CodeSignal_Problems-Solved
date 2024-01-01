function solution(prices: number[], notes: string[], x: number) {
  let higher = 0,
    lower = 0;

  for (let i = 0; i < prices.length; i++) {
    const porcentage = +notes[i].split("%")[0];
    const requirement = notes[i].split("%")[1];
    if (requirement?.includes("higher")) {
      higher += prices[i] - prices[i] / (1 + porcentage / 100);

      console.log(higher);
    } else if (requirement?.includes("lower")) {
      lower += prices[i] / (1 - porcentage / 100) - prices[i];
    }
  }
  const reduced = (higher - lower).toFixed(4);
  return +reduced <= x;
}

// console.log(
//   solution(
//     [110, 95, 70],
//     ["10% higher than in-store", "5% lower than in-store", "same as in-store"],
//     5
//   )
// ); // true

// const prices = [24.42, 24.42, 24.2424, 85.23],
//   notes = [
//     "13.157% higher than in-store",
//     "13.157% lower than in-store",
//     "Same as in-store",
//     "19.24% higher than in-store"
//   ],
//   x = 24.24; // true

const prices = [40, 40, 40, 40],
  notes = [
    "0.001% higher than in-store",
    "0.0% lower than in-store",
    "0.0% higher than in-store",
    "0.0% lower than in-store",
  ],
  x = 0; // false

console.log(solution(prices, notes, x));
