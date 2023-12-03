const fn1 = new Function('a','b', 'return a + b'); //わたってくる引数は文字列で記述。

//function fn(a, b) {
//  return a + b;
//} と同じ。

const result = fn1(1,2);

console.log(result);

function fn2(a, b) {
  return a + b;
}
console.log(fn2 instanceof Function); //Functionコンストラクターから生成されているためtrue
