const { patternmatching, searchEDA } = require("./functions");

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✓ ${testName} - Passed`);
  } else {
    console.error(
      `✗ ${testName} - Failed: Expected ${expected}, but got ${actual}`
    );
  }
}

function runTests() {
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

  p_example.forEach((pattern) => {
    const result = patternmatching(r_example, [pattern]);
    assertEqual(
      result,
      true,
      `patternmatching should return true for pattern '${pattern}'`
    );
  });

  const result2 = searchEDA(r_example);
  assertEqual(
    result2,
    true,
    "searchEDA should return true for ReDoS vulnerable regex"
  );

  const safeRegex = "a*b";
  const result3 = searchEDA(safeRegex);
  assertEqual(result3, false, "searchEDA should return false for safe regex");
}

runTests();
