const solution = require("./avoidObstacles.js");

describe("avoidObstacles", () => {
  it("Should return 4", () => {
    expect(solution([5, 3, 6, 7, 9])).toBe(4);
  });
  it("Should return 4.", () => {
    expect(solution([2, 3])).toBe(4);
  });
  it("Should return 7.", () => {
    expect(solution([1, 4, 10, 6, 2])).toBe(7);
  });
  it("Should return 6", () => {
    expect(solution([1000, 999])).toBe(6);
  });
  it("Should return 3", () => {
    expect(solution([19, 32, 11, 23])).toBe(3);
  });
  it("Should return 6.", () => {
    expect(solution([5, 8, 9, 13, 14])).toBe(6);
  });
});
