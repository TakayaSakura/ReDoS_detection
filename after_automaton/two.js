const re = /^a*a*$/;
for (let i = 10000; i <= 40001; i *= Math.sqrt(2)) {
  const n = Math.floor(i);
  console.time(n);
  re.exec("a".repeat(n) + "b");
  console.timeEnd(n);
}
