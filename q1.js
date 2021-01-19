function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  if (Array.isArray(JSON.parse(input))) {
    out = true;
  } else {
    out = false;
  }
  /**/
  output.innerText = out;
}
