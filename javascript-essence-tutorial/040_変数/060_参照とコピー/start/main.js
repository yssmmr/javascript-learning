let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

let c = {
  prop: 'hello'
}
let d = c;

d.prop = 'bye';
console.log(c, d);
//c,d は同じオブジェクトへの参照をしているため、どちらもbyeへ変更される。


let e = {
  prop: 'hello'
}
let f = e;
f = {}
f.prop = 'bye';
console.log(e, f);
//fは新たに作成したオブジェクトへの参照をしているため、eの値は変わらない。