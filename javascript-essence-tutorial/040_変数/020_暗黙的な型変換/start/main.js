//javascriptは動的型付け言語。変数宣言時の型の宣言なし。
//typeofを使うことで型がわかる。
function printTypeAndValue(val) {
  console.log(typeof val, val)
}

let a = 0;
printTypeAndValue(a);


let b = '1' + a;
printTypeAndValue(b);
//どちらかのデータ型に自動的に合わせてくれる。
//parseIntを使用して数値に変換する事も可能。

let c = 15 - b;
printTypeAndValue(c);

let d = c - null;
printTypeAndValue(d);
//nullが数値の0に自動的に変換される。

let e = d- true;
printTypeAndValue(e);
//trueが数値の1とみなされる。