// // variables

// // Older
// var x = 3;
// var x = 6;
// var x = false;
// var x = "succ";
// //  var is global scope
// // it can be redeclare a variable and it can be reassign the value

// // Modern js variables

// let fname = "success";
// fname = true;
// // Block scope
// // it cannot redeclare a variable but it can be reassign the value

// const PI = 3.14;
// PI = 4.21;
// // Block scope
// // it cannot redeclare a variable but it cannot reassign the value

// console.log(x, fname, lname, PI);
// console.log(data);
// var data = 3.14;

// data = "success";
// data = 4;
// data = false;
// data = true;
// data = null;
// data = undefined;
// data = BigInt(2983982938982938);
// console.log(data);

// // Primitive
// // Number
// // String
// // null
// // undefined
// // boolean
// // Symbol
// // Bigint

// // Non primitive
// Objects,
// arrays

// let student = {
//   id: 1,
//   fname: "success",
// };

// let arr = [1, null, undefined, true, false, "rahul"];

// console.log(typeof arr);

// // const fruits = [2, "orange", "apple"];
// console.log(fruits);

// function

// console.log(myfunction(4, 7));
// console.log(myfunction(9, 45));
// console.log(myfunction(2, 78));

// function myfunction(a, b) {
//   return a + b;
// }

// const mobile = {
//   model: "Iphone",
//   memory: 128,
//   ram: 4,
//   battery: "4000mah",
//   wallpepers: {
//     nature1: "nature1",
//     nature2: "https://th.wallhaven.cc/lg/gw/gwwkql.jpg",
//     nature3: "nature3",
//   },
//   getMemoryandRam: function () {
//     return (
//       "Memory is" +
//       " " +
//       this.memory +
//       "GB " +
//       "and RAM is" +
//       " " +
//       this.ram +
//       "GB"
//     );
//   },
// };
// const mobile2 = {
//   model: "Realme",
//   memory: 64,
//   ram: 3,
//   battery: "5000mah",
//   wallpepers: {
//     nature1: "nature1",
//     nature2: "nature2",
//     nature3: "nature3",
//   },
//   getMemoryandRam: function () {
//     return (
//       "Memory is" +
//       " " +
//       this.memory +
//       "GB " +
//       "and RAM is" +
//       " " +
//       this.ram +
//       "GB"
//     );
//   },
// };

// // get properties
// console.log(mobile.model);
// console.log(mobile["memory"]);

// console.log(mobile.getMemoryandRam());
// console.log(mobile2.getMemoryandRam());
// console.log(mobile.wallpepers.nature2);

// // add/update properties
// mobile.display="gorila glass"
// console.log(mobile.display);

// // delete
// delete mobile.model;
// console.log(mobile.model);

// Array
// // is type of object
// // there is no limit

// const arr1 = [1, 2, 3, 4, "rahul", "eshwar", "medhana", "faisal", "hemant"];
// arr1[3]="umesh"
// console.log(arr1);

// // push() - it use to add the data at last index
// arr1.push("tejaswini")
// console.log(arr1);

// // pop() - it use to remove the data at last index
// arr1.pop();
// console.log(arr1);

// // shift() - it use to remove the data at first index
// arr1.shift();
// console.log(arr1);

// // unshift() - it use to add the data at first index
// arr1.unshift(9)
// console.log(arr1);

// // join() - use to join the data in array
// const joinarray = arr1.join(" ");
// console.log(joinarray);

// const arr1 = [0, 1, 2, 3, "rahul", "eshwar", "meghana", "faisal", "hemant"];
// // splice() - it will remove the data or delete the data from existing array and it will give new array
// arr1.splice(0, 4, "tejaswini", "umesh");
// // arr1.splice(starting index, deletecount, item1, item2);
// console.log(arr1);

// // slice() - it will remove data in existing array from start index and until end index and it will give new array
// const arrslice = arr1.slice(4, 8);
// // arr1.slice(start index,until end index of a number)
// console.log(arrslice);

// arr1.forEach((name) => {
//   console.log(name);
// });

// // Normal function
// function myfun(a, b) {
//   const c = a + b;
//   return c;
// }

// // Arrow function
// const myfun2 = (c, d) => {
//   const e = c + d;
//   return e;
// };
// console.log(myfun(2, 3));

// console.log(myfun2(5, 6));

// // variables
// let name = "success";
// let age = 34;
// let isStudent = true;

// console.log(name, age, isStudent);

// // Area of circle
// let radius = 5;
// let area = Math.PI * radius * radius;

// console.log(area);

// // swap two number
// let a = 10,
//   b = 20;

// let temp = a;
// a = b;
// b = temp;

// console.log(a, b);

// // Greeting function
// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("Umesh"));

// // Add 2 numbers
// function addNumber(x, y) {
//   return x + y;
// }

// console.log(addNumber(10, 30));

// Array
// const arr1 = [0, 1, 2, 3, "rahul", "eshwar", "meghana", "faisal", "hemant"];

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// // forEach() - it wont return new array
// arr1.forEach((data) => {
//   console.log(data);
// });

// const employesalary = [10000, 20000, 30000, 40000];
// // map() - it will return a new array
// let bonus=1000
// const maparr = employesalary.map((salary) => {
//   return salary + 30000;
// });

// console.log(employesalary + " Regular salary");
// console.log(maparr + " New Year salary with bonus");

// console.log(3 + 4 + true + false + null + "umesh" + undefined + null);

// // filter() -
// const filterarr = employesalary.filter((salary) => {
//   return salary < 30000;
// });

// console.log(maparr);
// console.log(filterarr);

// const students = [
//   { id: 1, name: "rahul", game: "cricket" },
//   { id: 3, name: "hemant", game: "basketball" },
//   { id: 3, name: "faisal", game: "cricket" },
//   { id: 4, name: "eshwar", game: "basketball" },
//   { id: 5, name: "megha", game: "cricket" },
// ];

// const cricketplayers = students.filter((student) => {
//   return student.game === "basketball";
// });

// console.log(students);

// console.log(cricketplayers);

// const arr2 = [34, 56, 33, 78, 9, 45, 33, 78, 49, 33];
// // find() -
// const is45 = arr2.find((number) => {
//   // 34===33
//   // 56===33
//   // 78===33
//   // ...
//   // 33===33 true
//   return number === 45;
// });

// console.log(is45);

// // indexOf()
// const isfirstIndex = arr2.indexOf(33);
// console.log(isfirstIndex);

// // lastindexOf() -
// const lastindexof = arr2.lastIndexOf(33);
// console.log(lastindexof);

// // const arr2 = [34, 56, 33, 78, 9, 45, 33, 78, 49, 33];
// // reduce()-
// const total = arr2.reduce((acc, number) => {
//   return acc + number;
// //  acc= acc+number
// // 64= 0+34
// // 100= 64+56
// //  133  = 100+33
// }, 20);

// console.log(total);

// const fruits = ["apple", "banana", "orange", "mango", "apple", "banana","apple","pineapple"];

// let redfruits = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(redfruits);

// // 1. acc["apple"] = 0 + 1;  = 1;
// // 2. acc["banana"] = 0 + 1;  = 1;
// // 3. acc["orange"] = 0 + 1;  = 1;
// // 4. acc["mango"] = 0 + 1;  = 1;
// // 5. acc["apple"] = 1 + 1;  = 2;
// // 6. acc["banana"] = 1 + 1;  = 2;
// // 7. acc["orange"] = 1 + 1;  = 2;
// // 8. acc["apple"] = 2 + 1;  = 3;



