//1 Merge sort
function mergeSort(array) {

    
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    

    left = mergeSort(left)
    right = mergeSort(right);
    return merge(left, right, array)
}

function merge(left, right, array) {

    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

//let myArray = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
//mergeSort(myArray)

//1.1 3 calls we have split the left side values all the way to individual element lists on two list of one element

//1.2 calls we have taken our left side of the original split and split it all the way to individual elements and merged on the left and broken down all elements on the right (of left side)
//     into individual elements

//1.3 after first merge our list is [1, 21]

//1.4 after 7 merges we have the entire left side sorted from initial split.


//2 Quick sort
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    let tempItem = array.shift();
    array.push(tempItem);
    console.log('--------- ALTERED: ',array);
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};
let count = 0;
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    count++;
    const middle = partition(array, start, end);
    console.log('COUNT: ', count, '--------- ARRAY: ', array);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

let myArr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
console.log(quickSort(myArr));

//2.1 the pivot could have been either 14 or 17
  //Pivot 12: [3, 9, 10, 12, 19, 14, 17, 16, 13, 15]

//2.2



//Pivot 14: [14, 13, 10]


//3 Implementing quicksort
function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
};

let myArr2 =[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 
            2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 
            28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 
            46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 
            98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
// console.log(quickS(myArr2));



//4 Implementing merge sort
function mSort( array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice( middle, array.length)

  left = mSort(left)
  right = mSort(right)
  return merge(left, right, array)
}



//5 Sort Linked list using merge




//6 Bucket sort





//7 Sort in place




//8 Sort books



