function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  const arr = JSON.parse(input);
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
      answer.push("-", arr[i]);
    } else {
      answer.push(arr[i]);
    }
  }
  out = answer;
  /**/
  output.innerText = out;
}
