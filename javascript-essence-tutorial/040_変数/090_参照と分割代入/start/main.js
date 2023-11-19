//分割代入、　オブジェクトから特定のプロパティーを抽出して宣言を行う。

const a = {
  prop: 0
}

let { prop } = a;
//{}内の値は参照先の名前と統一する。命名したければprop: 〇〇と記述。

prop = 1;
console.log(a, prop);



function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}
fn(a);
//特定のプロパティのみ抽出。

const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;
prop1.prop2 = 1;

console.log(c, prop1);
//分割代入を使って宣言した変数がオブジェクト（prop1はオブジェクト）だった場合、オブジェクトの参照を保持しているため分割代入元のオブジェクトにも影響が出る。

