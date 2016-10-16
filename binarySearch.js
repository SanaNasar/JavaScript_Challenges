//IMPLEMENTATION 1
function binarySearch(values, target, start, end) {
  values = values.sort(function(a, b)
    {
      return a-b;
    });
  if (start > end) { return -1; } //does not exist

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];

  if (value > target) { return binarySearch(values, target, start, middle-1); }
  if (value < target) { return binarySearch(values, target, middle+1, end); }
  return middle; //found!
}
var testArr = [1, 4, 6, 7, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 26, 28];
console.log(binarySearch(testArr, 13, 0, testArr.length-1));

//IMPLEMENTATION 2
function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((startIndex + stopIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}

//IMPLEMENTATION 3

function binarySearch(sortedArr, target, start, end) {

  //to catch if it doesn't exist, if start ever exceeds end,
  //we've traversed to the end of the arr
  if (start > end) {
    return -1;
  }

  //get mid point of arr
  var mid = Math.floor((start + end)/2);
  var midValue = sortedArr[mid];

  //if target is less than midpoint, go to left side
  if (target < midValue) {
    return binarySearch(sortedArr, target, start, mid-1);
  //if target is greater than midpoint, go to right side
  }
  if (target > midValue) {
    return binarySearch(sortedArr, target, mid+1, end);
  }

  return mid;

}

var testArr = [1,2,3,4,5,6];
binarySearch(testArr, 1, 0, testArr.length-1);

binarySearch([1,2,3,4,5,6], 7, 0, testArr.length-1);