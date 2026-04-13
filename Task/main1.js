let temperature = 10; 

if (temperature <= 0) {
  console.log("It's freezing");
} else {
  if (temperature > 0 && temperature <= 10) {
    console.log("It's cold");
  } else {
    if (temperature > 10 && temperature <= 25) {
      console.log("It's warm.");
    } else {
      console.log("It's hot");
    }
  }
}