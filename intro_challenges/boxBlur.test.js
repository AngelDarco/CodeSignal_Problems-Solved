const solution = require("./boxBlur");

describe("boxBlur", () => {
  it("Should return an Array", () => {
    expect(
      Array.isArray(
        solution([
          [1, 1, 1],
          [1, 7, 1],
          [1, 1, 1]
        ])
      )
    ).toBe(true);
  });
});
