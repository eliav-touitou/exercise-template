function identifyValue(arr, prop) {
  let extractedValue = [];

  for (let i = 0; i < arr.length; ++i) {
    extractedValue.push(arr[i][prop]);
  }
  return extractedValue;
}
