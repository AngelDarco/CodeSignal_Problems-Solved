const solution = require("./isIPv4Address");

describe("isIPv4Address", () => {
  it("Should return true if the string can be converted to a number", () => {
    expect(solution("89.0.142.86")).toBe(true);
  });
  it("should return false if the string cannot be converted to a number", () => {
    expect(solution("1a.255.256.255")).toBe(false);
  });
  it("should return false if the string lenght is more than 4", () => {
    expect(solution("1.2.3.4.5")).toBe(false);
  });
  it("should return false if the string lenght is less than 4", () => {
    expect(solution("5")).toBe(false);
  });
  it("should return false if the ip values start with 0", () => {
    expect(solution("01.233.161.131")).toBe(false);
  });
});
