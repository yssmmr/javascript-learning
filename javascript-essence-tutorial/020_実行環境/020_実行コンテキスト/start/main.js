let a = 0;

// 関数コンテキストとは関数が実行されている時に生み出されるコンテキスト
// 外部変数とは関数の外で定義されたもの
function b() {
  console.log(this, arguments, a);
}

console.log(a);
b();