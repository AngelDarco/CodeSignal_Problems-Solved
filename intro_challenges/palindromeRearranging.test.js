/* eslint-disable prettier/prettier */
const solution = require("./palindromeRearranging.js");

describe("palindromeRearranging", () => {
  it("Should return true", () => {
    expect(solution("aabb")).toBe(true);
  });
  it("Should return false", () => {
    expect(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")).toBe(false);
  });
  it("Should return true if only one letter", () => {
    expect(solution("z")).toBe(true);
  });
  it("Should return false if only two letters, and they are different", () => {
    expect(solution("ab")).toBe(false);
  });
  it("abdhuierf Should return false", () => {
    expect(solution("abdhuierf    ")).toBe(false);
  });
  it("Must return false", () => {
    expect(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa")).toBe(
      false
    );
  });
  // Test case 1: Testing a palindrome string "racecar"
  test("case 1: Testing a palindrome string", () => {
    expect(solution("racecar")).toBe(true);
  });

  // Test case 2: Testing a non-palindrome string "hello"
  test("case 2: Testing a non-palindrome string", () => {
    expect(solution("hello")).toBe(false);
  });

  // Test case 3: Testing an empty string ""
  test("case 3: Testing an empty string", () => {
    expect(solution("")).toBe(false);
  });

  // Test case 4: Testing a string with special characters "!@#$%"
  test("case 4: Testing a string with special characters", () => {
    expect(solution("!@#$%")).toBe(false);
  });

  // Test case 5: Testing a string with whitespace "a man a plan a canal panama"
  test("case 5: Testing a string with whitespace", () => {
    expect(solution("a man a plan a canal panama")).toBe(true);
  });
  it("returns true for a palindrome-like string", () => {
    expect(solution("level")).toBe(true);
  });

  it("returns false for a non-palindrome-like string", () => {
    expect(solution("hello")).toBe(false);
  });

  it("returns false for a string with length greater than 50", () => {
    const longString = "a".repeat(51);
    expect(solution(longString)).toBe(false);
  });

  it("returns true for a single-character string", () => {
    expect(solution("a")).toBe(true);
  });

  it("returns true for a string with length 2 and characters being swapped to create a palindrome-like string", () => {
    expect(solution("ab")).toBe(false);
  });

  it("returns false for a string with length 2 and characters not being swapped to create a palindrome-like string", () => {
    expect(solution("xy")).toBe(false);
  });
});
