//найти сумму положительных нечетных значений массива

function calculate(arr) {
  return arr.reduce(
    (acc, item) => (item > 0 && item % 2 ? acc + item : acc),
    0
  );
}

console.log(calculate([5, 0, -7, 12, 15]));

// ===============================================

let arr1 = [1, 2, 3];
let arr2 = arr1;
// arr2 = [50, 100, 150];
arr2[0] = 50;
console.log(arr1[0]);

//===================================================

function check(arr, num) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[index] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;
}

console.log(check([10, 14, 3, 7], 13));
console.log(check([10, 15, 3, 7], 20));

// ================================

function sumDigits(num) {
  const arrOfDigits = num.toString().split("");
  return arrOfDigits.reduce((acc, item) => acc + Number(item), 0);
}

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumDigits(123));
console.log(sumDigits(904));
console.log(sumDigits(3));

// ===sort by object keys and values===

const obj = {
  15: 15,
  z40iv: "z40iv",
  "-1": -1,
  "3sdf": "3sdf",
  74: 74,
  12: 12,
  1: 1,
  5: 5,
  k: "k",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));

// ========================================

// функция принимает массив чисел и возвращает элементы этого массива,
//  которые отличны от наибольшего элемента не более чем на 10%

function func(arr) {
  // const bigestInt = arr.sort((a, b) => b - a)[0];      //sort медленный метод используем Math.max()
  const maxInt = Math.max(...arr);
  // let changedArr = arr.filter((item) => item !== maxInt);
  // return changedArr.filter((item) => maxInt / 10 - item / 10 < 1);
  return arr.filter((item) => maxInt * 0.9 < item && item !== maxInt);
}

console.log(func([5, 88, 95, 100, 77, 21, 92]));
console.log(func([2, 13, 55, 29, 19, 5, -5]));

//========================================================

// Дана функция, в нее передается массив и целое положительное число.
// Необходимо реализовать функцию так, чтобы она в массив добавляла нули до нужного размера,
// размер передан вторым параметром.

function fillArr(arr, len) {
  for (let i = arr.length; i < len; i++) {
    arr.push(0);
  }
}

// function fillArr(arr, len) {
//   while (arr.length < len) {
//     arr.push(0);
//   }
// }

const arr = [2, 6, 8];
fillArr(arr, 5);
console.log(arr);

//=====================================================

// Функция возвращает массив очищенный от совпадений.

// function unique(arr) {
//   const uniqSet = [...new Set(arr)];
//   return uniqSet;
// }

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique([1, 8, 1, 5, 9, 5, 8]));

//======================================================

// Реализовать функцию round5, которой передается целое число,
// функция должна возвращать ближайшее к переданному целое число без остатка делящееся на 5.

function round5(val) {
  return Math.round(val / 5) * 5;
}

console.log(round5(0));
console.log(round5(2));
console.log(round5(3));
console.log(round5(11));
console.log(round5(14));
console.log(round5(50));
console.log(round5(-2));
console.log(round5(-3));

// =============================================

// Функция uniquePoints, принимает массив объектов и вовращает массив уникальных объектов.

function uniquePoints(arr) {}

const arr3 = [
  { x: 5, y: 10 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 16, y: 33 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 4, y: 12 },
];

console.log(uniquePoints(arr3));

//========================================

const baseURL = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = () => {
  console.log("Fetch started");
  return fetch(baseURL).then((response) => response.json());
};

fetchTodos().then((data) => console.log(data[21]));

//=====================================

const fetchAsyncTodos = async () => {
  try {
    console.log("AsyncFetch started...");
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log("asyncData: ", data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("AsyncFetch done.");
  }
};

fetchAsyncTodos().then((data) => console.log("dataItem: ", data[34]));

//==========================================
