function scan(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] != "" && arr[i] != null) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
