const solution = require("./arrayChange.js");

describe("Must return the minimum number of moves needed to make all array elements equal increasing", () => {
  it("Should return 3", () => {
    expect(solution([1, 1, 1])).toBe(3);
  });
  it("Should return 4", () => {
    expect(solution([-1000, 0, -2, 0])).toBe(5);
  });
  it("Should return 2", () => {
    expect(solution([2, 1, 10, 1])).toBe(12);
  });
  it("Should return 13", () => {
    expect(solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])).toBe(13);
  });
});
