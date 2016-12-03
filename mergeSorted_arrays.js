// i: [1,2,3], [3,4,5]
// o: [1,2,3,3,4,5]

//i: [1,2,3], [1,4,5,6]
//o: [1,1,2,3,4,5,6]

function combineArrays(arr1, arr2) {
  var result = arr1;
  for (var i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

//console.log(combineArrays([1,2,3,4,5], [6,7]));

function combineSortedArrays(arr1, arr2) {
  // instantiate res arr
  var result = [];

  for (var i = 0; i < arr1.length; i++) {
    if (result)
    for (var j = 0; j < arr2.length; j++) {

    }
  }

  //for loop that goes through arr1
  //for loop that goes through arr2
    //if the element in arr1 is greater than element in res
      // push element from arr1 into res
    //if the element in arr2 is greater than element in res
      // push element from arr2 into res

  //return res

}

//2 approaches:
// 1. i instantiate a res array and push the element from either array in if it's bigger
// 2. what if just push them all into a result arr and then sort that array? ***

// tc: O(n) + O(nlogn), so just O(nlogn)
//sc: O(n) bc we make dup arrays

function combineSortedArrays(arr1, arr2) {
  var res = arr1.concat(arr2);

  return mergeSort(res);

}

var mergeSort = function(input){
  if (input.length < 2) {
    return input;
  }

  var middle = parseInt(input.length/2);
  var left = input.slice(0, middle);
  var right = input.slice(middle, input.length);

  return merge(mergeSort(left), mergeSort(right));

};

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes 1st index from arr and return it
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

console.log(combineSortedArrays([1,2,4],[3,4,5]));

//console.log(mergeSort([1,2,4,3,5,4]));

//SOLUTION ONLINE
function combiner (arr1,arr2) {
  var result = [],
  lenReturn = arr1.length + arr2.length;
  for (var i = 0, j = 0, k = 0; k < lenReturn; k++) {
    if(arr1[i] < arr2[j] || arr2[j] === undefined) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

console.log(combiner([1,4,6,8,9], [2,3,5,7,10,11]));