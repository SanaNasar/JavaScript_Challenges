function count(arr) {
  var dict = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in dict) {
      dict[arr[i]]++;
    } else {
      dict[arr[i]] = 1;
    }
  }
  return dict;
}

//count(['a', 'a', 'b', 'b', 'b', 'b'])
//==> {'a': 2, 'b': 4}