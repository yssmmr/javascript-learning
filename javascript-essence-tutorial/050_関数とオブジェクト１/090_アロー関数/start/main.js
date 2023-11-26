//アロー関数→無名関数を記述しやすくした省略記法　()=> {};

function a(name) {
  return 'hello' + name;
}

const b = (name, name1) => 'hello ' + name + ' ' + name1;

//引数が一つの場合(),{}を省略可能、引数なしの場合には()だけ記述
//一行の場合はreturn省略可。

console.log(b('Tom', 'Bob'));