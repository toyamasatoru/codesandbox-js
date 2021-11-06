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
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("mouse");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "satoru";
// const age = 31;
//私の名前はsatoruです。年齢は31歳です。

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

//アロー関数（１行ならreturnが省略できる）
// const func2 = (str) => str;
// console.log(func2("func2です"));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "satoru",
//   age: 31,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ['satoru', 31];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${nameです。年齢は${age}歳です。}`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`)
// sayHello("satoru");
