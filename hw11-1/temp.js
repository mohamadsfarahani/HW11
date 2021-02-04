function callback(fname, lname) {
  console.log(`${fname} ${lname}`);
}
function caller() {
  a = prompt("give me fname");
  b = prompt("give me lname");
  callback(a, b);
}
caller();
