//falsyな値、 Boolean型で真偽値に変換した場合にfalseになる値の事
//null, underfined, NaNなど

let a = 0;
console.log(Boolean(a));
//Booleanを使用すると真偽値が出力される

if(!a) {
  console.log('hello');
} else {
  console.log('bye')
;}
//!を付けると条件式が成り立たない時
