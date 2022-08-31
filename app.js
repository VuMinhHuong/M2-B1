// Bài 1: Hosting là đưa phần khai báo hay lưu vào bộ nhớ các biến khi bắt đầu chạy chương trình
//===========================
// Bài 2: 2 giai đoạn
// - Giai đoạn khởi tạo
// - Giai đoạn thực thi
//===========================
//Bài 3:
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// } 
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// Không có lệnh console.log -> không in ra gì cả
//===========================
//Bài 4:
// console.log(`1. ${age}`); // undefined - lúc này mới chỉ lưu age = undifined vào global
// var age = 20;
// console.log(`2. ${age}`); // 20 - sau dòng 24 đã gán age = 20
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`) // 27 - function là global + first & lastName đã được khai báo
// // Function declaration
// function calAge(year) {
//     return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) // 27
// console.log(`5. ${getFullName(firstName, lastName)}`); // Error - getFullname khai báo bằng var nên undifined -> dùng chương trình
// // Function expression
// var getFullName = function (firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`);// Peter Parker
//===========================
//Bài 5:
// console.log(age); // Error - let age là local scope - dừng chương trình
// let age = 27;
// console.log(age) // 27 
// {
// // console.log(firstName); // Error - let firstName là local scope - dừng chương trình
// console.log(age); // 27
// console.log(age);// 27
// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";
// console.log(firstName); //Peter
// console.log(lastName); //Parker
// console.log(job); //Spider man
// }
//===========================
//Bài 6:
// a = 2;
// var a;
// console.log( a ); // 2 - trước console đã gán cho a = 2
//===========================
//Bài 7:
// console.log( a ); // undifined - var a lưu vào global = undifined chưa được gán giá trị
// var a = 2;
//===========================
//Bài 8
// var a = 10;
// function foo() {
//     var a;
//     console.log(a);
//     a = 2;
// } 
// foo(); // undefined
//===========================
//Bài 9:
// foo();
// var foo();
// function foo() {
//     console.log(1);
// }
// foo = function () {
//     console.log(2);
// }
//===========================
//Bài 10
// var foo =
// function foo() {
//     console.log(1);
// } 
// foo = function () {
//     console.log(2); // 2
// }
// foo();
//===========================
// Bài 11: Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// function removeEnd(arr, n) {
//     // logic code
//     arr.splice(arr.length-n,n);
//     console.log(arr);
// }
// removeEnd(['a','b','c'], 2);
//=============
// Bài 12: Viết 1 chương trình xóa đi n phần tử đầu của 1 array
// function first(arr, n) {
//     // logic code
//     arr.splice(0,n);
//     console.log(arr);
// }
// first(['a','b','c',1], 3);
//Bài 13: 
// const users = [
//     {
//     name: "Angelina Jolie",
//     age: 80
//     },
//     {
//     name: "Eric Jones",
//     age: 2
//     },
//     {
//     name: "Paris Hilton",
//     age: 5
//     },
//     {
//     name: "Kayne West",
//     age: 16
//     },
//     {
//     name: "Bob Ziroll",
//     age: 100
// }
// ]
//Sử dụng phương thức map() của array, tạo một array mới với các phần tử con ở trong
//có name nằm trong các thẻ h1, age nằm trong các thẻ h2
// function fun() {
//     return {
//         name: `<h1>${this.name}</h1>`,
//         age: `<h2>${this.age}</h2>`,
//     };

// };
// let newArr = users.map(fun);
// console.log(newArr);

//Bài 14:
// function fun(a) {
//     return a.name;
// };
// let newArr = users.map(fun);
// console.log(newArr);
//Bài 15:
//Viết một hàm triple() trả về một số đã được nhân 3
// function triple(num) {
//     return num*3;
// }
// console.log(triple(2));
//Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và
//trả về mảng mới với các số đã được nhân 3. Sử dụng hàm triple để nhân 3 các
//số đó
// function multiply(arr) {
//     return arr.map(triple);
// }
// console.log(multiply([1,2,3]));
//==========================================
//Bài 16:
//Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên, hàm đó
//trả về một mảng mới chỉ chứa các phần tử lớn hơn 5
// function fil(arr) {
//    return arr>5;
// }
// let a = [1,2,3,4,5,6];
// console.log(a.filter(fil));
//==========================================
//Bài 17:
// //Mảng ví dụ:
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' },
//     ];

// //Nhập mảng object:
// var members = [];
// var obj = {};
// let n = prompt("Input number of array");
// for (let i = 0; i <= n-1; i ++) {
//     let name1 = prompt(`Input name ${i} of members`);
//     let gender1 = prompt(`Input gender ${i} of members`);
//     obj.name = name1;
//     obj.gender = gender1;
//     members.push(obj)
// }
// console.log(members);

// console.log(members[0].gender);

// //Dùng hàm tìm female:
// function fil(o) {
//     if(o.gender === 'female'){
//         return o;
//     }
// }
// console.log(members.filter(fil));


//==============================
//Bài 18:
// //Nhập vào mảng số:
// let arr = [];
// let n = prompt('Nhập số phần tử của mảng:');
// for(let i = 0; i < n; i++){
//     let arrTemp = prompt(`Phần tử thứ ${i} là:`);
//     arr.push(arrTemp);
// }
// console.log(arr);
// //Dùng fill để trả về số chẵn đầu tiên
// function fun(ref) {
//     return ref % 2 === 0;
// }
// console.log(arr.find(fun));

//==============================
//Bài 19:
//Nhập mảng:
// let n = prompt('Nhập số phần tử của mảng:');
// let arr = [];
// for(let i = 0; i < n; i++){
//     let arrTemp = prompt(`Phần tử thứ ${i} là:`);
//     arr.push(arrTemp);
// }
// //Nhập số cần chia hết:
// let num = prompt('Nhập số mà phần tử đầu tiên trong mảng chia hết:');

// function findInArr(ar) {
//     return ar%num === 0;
// };
// console.log(arr.find(findInArr));
//================================
//Bài 20


