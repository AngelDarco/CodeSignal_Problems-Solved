const solution = require("./arrayMaximalAdjacentDifference.js");

describe("arrayMaximalAdjacentDifference", () => {
  it("Should return 3", () => {
    expect(solution([2, 4, 1, 0])).toBe(3);
  });
  it("Should return 4", () => {
    expect(solution([-1, 4, 10, 3, -2])).toBe(7);
  });
  it("Should return 2", () => {
    expect(solution([10, 11, 13])).toBe(2);
  });
  it("Should return 13", () => {
    expect(solution([-1, 1, -3, -4])).toBe(4);
  });
  it("Should return 0", () => {
    expect(solution([1, 1, 1, 1])).toBe(0);
  });
});
