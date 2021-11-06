// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

//constは、上書きも再宣言も不可

//const定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "satoru",
//   age: 31,
// };
// val4.name = "さとる";
// val4.addres = "Saitama";
// console.log(val4);

//const定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("mouse");
console.log(val5);
