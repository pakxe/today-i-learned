function print2() {
  console.log(2);
  return;
}

console.log(1);
setTimeout(print2, 7000);
console.log(3);