for (let i = 1; i <= 30; i++) {
  const a = "a".repeat(i);
  const start = new Date().getTime();

  const regex = /(a+)+b/;

  regex.test(a);

  const end = new Date().getTime();
  console.log(`${i} :${(end - start) / 1000}s`);
}
