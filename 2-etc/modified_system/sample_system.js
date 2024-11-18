const regex = "/^(b+)+$/";

const includes = regex.includes("+)+");

if (includes == true) {
  const result = regex.replace("+)+", "{1,5}){1,5}");
  console.log(result);
} else {
  const result = regex;
  console.log(result);
}
