// 分割代入
console.log("分割代入");
let data = [32, 43, 53];
let [x, y, z] = data;
console.log(x);
console.log(y);
console.log(z);

// 「...」演算子で残りの要素を取得する
console.log("「...」演算子で残りの要素を取得する");
let data_1 = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, ...other] = data_1;
console.log(x0);
console.log(x1);
console.log(x2);
console.log(other);

// オブジェクトの分割代入
console.log("オブジェクトの分割代入");
let book = {
  title: "Javaポケットリファレンス",
  publisher: "技術評論社",
  price: 2680
};

let { price, title, memo = "×"} = book;
console.log(title);
console.log(price);
console.log(memo);

// 条件演算子（三項演算子）
console.log("条件演算子（三項演算子）");
let score = 80;
console.log(score >= 70 ? "合格" : "不合格");