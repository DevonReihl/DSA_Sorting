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

let myArray = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
mergeSort(myArray)

//1.1 3 calls we have split the left side values all the way to individual element lists on two list of one element

//1.2 calls we have taken our left side of the original split and split it all the way to individual elements and merged on the left and broken down all elements on the right (of left side)
//     into individual elements

//1.3 after first merge our list is [1, 21]

//1.4 after 7 merges we have the entire left side sorted from initial split.



//2 Quick sort
//2.1


//2.2



//3 Implementing quicksort




//4 Implementing merge sort




//5 Sort Linked list using merge




//6 Bucket sort





//7 Sort in place




//8 Sort books



