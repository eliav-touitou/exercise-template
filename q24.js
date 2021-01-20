// by the authorization of Tomer, this question doesn't include the input  from the index page
function scan(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] != "" && arr[i] != null) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
