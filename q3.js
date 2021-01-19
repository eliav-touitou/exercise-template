function run() {
  const input = document.getElementById("input").value;
  const input2 = document.getElementById("input2").value;
  const output = document.getElementById("output");
  let out = "";
  const arr = JSON.parse(input);

  let temp = [];
  for (let i = 0; i < 2; i++) {
    temp.push(arr[i]);
  }
  out = temp;
  output.innerText = out;
}
