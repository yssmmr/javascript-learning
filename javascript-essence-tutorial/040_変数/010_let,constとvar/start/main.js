//let a = 0;
//let a = 0;
//letは再宣言できない

//var b = 0;
//var b = 1;
//console.log(b);
//varは再宣言できる

let c = 0;
c = 1;
//letは再代入可能

//const d = 0;
//d = 1;
//constは再代入不可

{
  let e = 0;
  var f = 0;
}
//varはグローバルスコープで宣言されているのと同じ。
//ブロックスコープは有効にならない。

console.log(h);
let g = 0;
var h = 0;
//letの値を宣言よりも前に取得しようとするとエラーが起きる。
//varの場合undifinedと表示。undifinedが初期値のため。