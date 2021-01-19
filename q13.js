let arr = [];
let counter = 0;
let out = "";

function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  arr.push(input);
  out = out + `Element ${counter} = ${input}\n`;
  counter += 1;
  output.innerText = out;
}
