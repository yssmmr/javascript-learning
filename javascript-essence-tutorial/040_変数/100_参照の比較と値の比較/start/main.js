const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a === b);
//別々のオブジェクトを参照しに行くので、比較してもfalseになる

console.log(a.prop === b.prop);
//プロパティを参照しに行けばtrueになる。

const c = a;
console.log(a === c);
//参照先が一致するためtrueになる。