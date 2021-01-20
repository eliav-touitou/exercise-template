// by the authorization of Tomer, this question doesn't include the input  from the index page
function run(arr1, arr2) {
  let combined = [];

  for (let i = arr1.length - 1; i >= 0; --i) {
    combined[arr1[i]] = arr1[i];
  }

  for (let j = arr2.length - 1; j >= 0; --j) {
    combined[arr2[j]] = arr2[j];
  }

  let finnalAr = [];

  for (let k in combined) {
    if (combined.hasOwnProperty(k)) finnalAr.push(combined[k]);
  }

  return finnalAr;
}
