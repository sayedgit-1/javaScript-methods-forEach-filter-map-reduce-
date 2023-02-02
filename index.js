/*
🎀🎀🎀🎀 forEach() 🎀🎀🎀

const number = [1, 2, 3, 4, 5];

number.forEach((item, index, arr) => {
  return console.log(`${index} index = ${item} item`);
});

function consItems(item, index, arr) {
  return console.log(`${index} index = ${item} item`);
}

------------------------------------------------


const number = [1, 2, 3, 4, 5, 10];
let sum = 0;
number.forEach((items) => {
  sum += items;
});
console.log(sum);

--------------------------------


const letters = ["a", "b", "c", "d", "a", "a", "c"];
let count = {};
letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count);

const dwar = ["Apple", "Bannana", "Phone", "Gibrish"];
dwar.forEach(function (item, index, arr) {
  if (item === "Bannana") {
    item = item.toUpperCase();
  } else {
    item = item.toLowerCase();
  }
  console.log(index, item);
});
*/

/**
 🎀🎀🎀🎀 for in and for of 🎀🎀🎀


const obj = {
  id: 123,
  title: "somethiing",
  body: "ABC",
};

for (let i in obj) {
  console.log(i);
}

for (let i of obj) {   // for of is not applicable for objects
  console.log(i);
}
 

const arr = ["hello", "mr", "ncdjd", 489];

// for (let i in arr) {
//   console.log(i, arr[i]);
// }

for (let i of arr) {
  console.log(i);
}

*/

/**
 🎀🎀🎀🎀 map , filter & reduce  🎀🎀🎀
 
const arr = [5, 4, 6, 12, 3];

//🔖 map method

// const double = (x) => x * 2;
// const output = arr.map(double);
// console.log(output);

// const output = arr.map((x) => x * 2);
// console.log(output);

// const output = arr.map((x) => x.toString(2));
// console.log(output);

// 🔖 filter method

// const isOdd = (x) => x % 2;
// const output = arr.filter(isOdd);

// console.log(output);

// const output = arr.filter((x) => x % 2 === 0);
// console.log(output);

// const greaterThan4 = (x) => x > 4;
// const output = arr.filter(greaterThan4);
// const output = arr.filter((x) => x > 4);
// console.log(output);

// 🔖 reduce
// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// 🔖 find max
// const findMax = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax(arr));

// 🔖 find max using reduce

// const result = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(result);
*/

/* 
🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercise 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ 


const users = [
  { fname: "akshy", lname: "saini", age: 23 },
  { fname: "donald", lname: "trump", age: 75 },
  { fname: "Sayed", lname: "Ariful", age: 23 },
  { fname: "Elon", lname: "Musk", age: 60 },
];

// 🔖 Map exercise
// list of full  names
// ["akshy","donald"....]

// const output = users.map((user) => user.fname + " " + user.lname);
// console.log(output);

// 🔖 reduce exercise
// {2:23, 75:1,23:1 }

// const result = users.reduce(function (count, curr) {
//   if (count[curr.age]) {
//     count[curr.age] = count[curr.age] + 1;
//   } else {
//     count[curr.age] = 1;
//   }
//   return count;
// }, {});

// console.log(result);

//🔖 filter metho exercise

const result = users.filter((user) => user.age > 23).map((user) => user.fname);
console.log(result);

const resultNext = users.reduce(function (acc, curr) {
  if (curr.age > 23) {
    acc.push(curr.fname);
  }
  return acc;
}, []);
console.log(resultNext);
*/
