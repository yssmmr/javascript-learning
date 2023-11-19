let a = 0;

function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}

fn1(a);
//プリミティブ型で引数を渡す場合、値はそれぞれ影響しない。

let b = {
  prop: 0
}

function fn2(arg2) {
  arg2.prop = 1;
  console.log(b, arg2);
}

//fn2(b);
//arg2でオブジェクトbを参照しているため、propを変更するとbのpropも変わる。

function fn3(arg2) {
  arg2 = {};
  console.log(b, arg2);
}

fn3(b);

//新しく空のオブジェクトを作成しているため参照元のpropへ影響が出ない。
