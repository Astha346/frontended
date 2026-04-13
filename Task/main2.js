for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5 && i !== 7) continue;

  console.log("Multiplication Table of " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
  console.log("");
}