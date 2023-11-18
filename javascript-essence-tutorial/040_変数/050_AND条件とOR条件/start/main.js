const a = 0;
const b = 1;
const c = 2;
console.log(a && b);
//falsyの場合はaの値をそのまま返す,trutyの場合はbの値を返す

console.log(a || b);
//truthyの場合はaの値が返される。falsyであればbの値を返す。

console.log(a && b && c);
//falsyな値があった際はその値を返す。なければ最後の値を返す。

console.log(a || b || c);
//truthyな値が見つかった時点でその値を返す。なければ最後の値を返す。

console.log((a || b) && c);
