function fn(a, b) {
  console.log(a, b);
}

fn(2, 1); //値を設定しない引数はundefinedになる。

//同じ関数名で重複していた場合は後から宣言されたものが実行される。

function fn2(c, d=1) {
  console.log(arguments);
  console.log(c, d);
}

fn2(1);
//引数の時点で初期値を設定することも可能。 

//argumentsとはオブジェクト。呼び出し時に渡された実引数が入る。