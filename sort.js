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
  //partition provided:
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  //When using the first item on the list as a pivot:
  let tempItem = array.shift();
  array.push(tempItem);
  console.log('--------- ALTERED: ', array);

  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

let myArr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
// console.log(quickSort(myArr));

//2.2.1 the pivot could have been either 14 or 17
//Pivot 12: [3, 9, 10, 12, 19, 14, 17, 16, 13, 15]

//2.2.2
//Pivot 14: [10, 3, 9, 12, 13, 14, 16, 19, 17, 15]


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

let myArr2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26,
  2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,
  28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7,
  46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80,
  98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
// console.log(qSort(myArr2));


//4 Implementing merge sort
function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  left = mSort(left)
  right = mSort(right)
  return merge(left, right, array)
}
// console.log(mSort(myArr2))


//5 Sort Linked list using merge
class _Node {
  constructor(value, next) {
    this.value = value,
      this.next = next
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
  }

  insertBefore(value, key) {
    if (this.head === null) {
      this.insertFirst(value)
    }
    else {
      let prevNode = This.head;
      let NewNode = this.head;
      while (NewNode.value !== key) {
        prevNode = newNode;
        newNode = newNode.next;
      }
      prevNode.next = new _Node(value, newNode);
      this.size++;
    }
  }
}

let sortList = function (head) {

  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;

  }

  // close first half list
  prev.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);
  return merge(l1, l2);
};

function merge(l1, l2) {
  const head = new _Node();
  let current = head;

  while (l1 && l2) {
    if (l1.value <= l2.value) {
      // console.log('IF-----', 'l1', l1, 'l2', l2)
      current.next = l1;
      l1 = l1.next;
    } else {
      // console.log('ELSE-----', 'l1', l1, 'l2', l2)
      current.next = l2;
      l2 = l2.next;

    }

    current = current.next;
  }
  if (l1 === null) { current.next = l2 };
  if (l2 === null) { current.next = l1 };

  return head.next;
}

function display(list) {
  let curr = list.head;
  let str = '';

  while (curr) {
    str += curr.value + ", ";
    curr = curr.next;
  }
  return str
}

function main() {
  const SLL = new LinkedList();
  const SLL3 = new LinkedList();
  const SLL2 = new LinkedList();

  SLL.insertFirst(4);
  SLL.insertFirst(1);
  SLL.insertFirst(56);
  SLL.insertFirst(9);
  SLL.insertFirst(20);
  SLL.insertFirst(143);
  SLL.insertFirst(65);
  SLL.insertFirst(90);

  SLL2.insertFirst(35);
  SLL2.insertFirst(25);
  SLL2.insertFirst(15);
  SLL2.insertFirst(5);

  SLL3.insertFirst(50);
  SLL3.insertFirst(40);
  SLL3.insertFirst(30);

  console.log(sortList(SLL.head))
}

main()

//6 Bucket sort
function bucketSort(arr, max, min) {
  let newwArr = []
  a
}

//6 - Ady
let arr6 = [3, 32, 8, 5, 16]; 

// arr.splice(), shift() or unshift()

function sortArr(array, buckets, min, max){
    let bucketList = [];
    for (let i = 0; i < buckets; i++){
        bucketList.push([]);
    }
    for (let i = 0; i < array.length; i++){
        let range = Math.ceil((max - min) / buckets);
        let idx = Math.floor(array[i] / range);
        bucketList[idx].push(array[i]);
    }
     

}
console.log(sortArr(arr6, 3, 3, 32));
// buckets = 3
// lowest: 3
// highest: 32




//7 Sort in place
function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++
    }
  }
  if (swaps > 0) {
    return bubbleSort(array)
  }
  return array;
}

let malikArray = [2, 13, 31, 4, 32, 24, 8]
console.log(bubbleSort(malikArray));



//8 Sort books
// You can compare strings just like numbers, if a < b, then 'Harry Potter' < 'Twilight'
function books() {
  newBooks = []
  let books = ['Harry Totter', 'Twilight', 'HarryPotter',  'Dictionary', 'Coding for dummies']
  for (i = 0; i < books.length; i++) {
    //Removing spaces and creating a new array
    newBooks.push(books[i].replace(/ /g, ''))
  }
  //Testing with and without spaces. Apparently spaces are less than letters
  console.log('quicksort:    ', qSort(newBooks))
  console.log('bubblesort:    ', bubbleSort(books))
}



books()





// const bsort = (arr) => {
//   let zeroes = 0;
//   let ones = 0;

//   for (let i = 0; i < arr.length; i++) {
//     arr//?
//     zeroes//?
//     ones//?
//     if (arr.length - 1 - i <= i) {
//       if (zeroes) {
//         arr[arr.length - 1 - i] = 0;
//         zeroes--;
//       }

//       if (ones) {
//         arr[i] = 1;
//         ones--;
//       }
//     } else {
//       if (arr[arr.length - 1 - i] === 0) {
//         arr[arr.length - 1 - i] = 1;
//         zeroes++;
//       }

//       if (arr[i] === 1) {
//         arr[i] = 0;
//         ones++;
//       }
//     }
//   }

//   return arr;
// };
