function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  const arr = JSON.parse(input);
  let leaps = "";
  for (let i = arr[0]; i <= arr[1]; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
      leaps += i + ", ";
    }
  }
  out = leaps;

  output.innerText = out;
}
