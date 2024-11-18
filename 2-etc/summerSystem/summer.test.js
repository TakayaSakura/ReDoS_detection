const patternmatching = require("./summer");

test("(a+)+", () => {
  expect(patternmatching("(a+)+")).toBe(true);
});

test("(a*)*", () => {
  expect(patternmatching("(a*)*")).toBe(true);
});

test("(a+)*", () => {
  expect(patternmatching("(a+)*")).toBe(true);
});

test("(a*)+", () => {
  expect(patternmatching("(a*)+")).toBe(true);
});

test("(a|aa)+", () => {
  expect(patternmatching("(a|aa)+")).toBe(true);
});

test("(a|aa)*", () => {
  expect(patternmatching("(a|aa)*")).toBe(true);
});

test("(a|a?)+", () => {
  expect(patternmatching("(a|a?)+")).toBe(true);
});

test("(a|a?)*", () => {
  expect(patternmatching("(a|a?)*")).toBe(true);
});

// ここから先はfalse

test("a+", () => {
  expect(patternmatching("a+")).toBe(false);
});

test("(a+)?", () => {
  expect(patternmatching("(a+)?")).toBe(false);
});

test("(a?)+", () => {
  expect(patternmatching("(a?)+")).toBe(false);
});

test("(a|aa)?", () => {
  expect(patternmatching("(a|aa)?")).toBe(false);
});
