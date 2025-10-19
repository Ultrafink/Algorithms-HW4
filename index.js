function findKthElement(arr1, arr2, k) {
  let i = 0, j = 0, count = 0;
  let element;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      element = arr1[i];
      i++;
    } else {
      element = arr2[j];
      j++;
    }
    count++;
    if (count === k) return element;
  }

  
  while (i < arr1.length) {
    element = arr1[i];
    i++;
    count++;
    if (count === k) return element;
  }

  while (j < arr2.length) {
    element = arr2[j];
    j++;
    count++;
    if (count === k) return element;
  }
}


const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(`7-й элемент: ${findKthElement(arr1, arr2, k)}`);
