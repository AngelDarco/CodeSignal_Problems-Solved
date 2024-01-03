const solution = require("./areSimilar.js");

describe("areSimilar", () => {
  test("booth arrays with the same length should return true, false otherwise", () => {
    expect(solution([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(solution([2, 3], [2, 1, 3])).toBe(false);
    expect(solution([1, 2, 3], [1, 3])).toBe(false);
  });
  test("same array values should return true, false otherwise", () => {
    expect(solution([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(solution([1, 1, 3], [1, 2, 3])).toBe(false);
    expect(solution([1, 2, 3], [1, 1, 3])).toBe(false);
  });
  test("obtain equal arrays swapping two values from the different array should return true, false otherwise", () => {
    expect(solution([1, 2, 3], [2, 2, 3])).toBe(false);
    expect(solution([1, 2, 2], [2, 1, 1])).toBe(false);
    expect(solution([1, 2, 3], [2, 1, 3])).toBe(true);
    expect(solution([2, 3, 1], [1, 3, 2])).toBe(true);
    expect(
      solution(
        [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
        [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
      )
    ).toBe(false);
  });
});
