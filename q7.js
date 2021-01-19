function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  const arr = JSON.parse(input);

  let big;
  let small;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        big = arr[i];
        small = arr[j];
        arr[i] = small;
        arr[j] = big;
      }
    }
  }
  out = arr;

  output.innerText = out;
}
