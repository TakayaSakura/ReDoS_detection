const { expect } = require("chai");
const { patternmatching, searchEDA } = require("../system");

const r_example = "(a+)+";
const p_example = [
  "+)+",
  "*)*",
  "+)*",
  "*)+",
  "|aa)+",
  "|aa)*",
  "?)+",
  "|a?)*",
];

describe("patternmatching function", () => {
  it("should return true for all patterns in p_example", () => {
    p_example.forEach((pattern) => {
      const result = patternmatching(r_example, [pattern]);
      expect(result).to.be.true;
    });
  });

  it("should return false if no patterns match", () => {
    const noMatchExample = ["xyz", "123", "abc"];
    noMatchExample.forEach((pattern) => {
      const result = patternmatching(r_example, [pattern]);
      expect(result).to.be.false;
    });
  });
});

describe("searchEDA function", () => {
  it("should return true for ReDoS vulnerable regex", () => {
    const result = searchEDA(r_example);
    expect(result).to.be.true;
  });

  it("should return false for safe regex", () => {
    const safeRegex = "a*b";
    const result = searchEDA(safeRegex);
    expect(result).to.be.false;
  });
});
