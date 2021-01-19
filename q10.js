function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  const arr = JSON.parse(input);
  let string = "";
  for (let i = 0; arr.length > i; i++) {
    string += "Row " + i + ":  ";
    for (let j = 0; arr[i].length > j; j++) {
      string += arr[i][j];
      if (arr[i].length - 1 != j) {
        string += ", ";
      }
    }
    string += "  ";
  }
  out = string;

  output.innerText = out;
}
