// by the authorization of Tomer, this question doesn't include the input  from the index page

function run(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && result.indexOf(arr[i]) == -1) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
