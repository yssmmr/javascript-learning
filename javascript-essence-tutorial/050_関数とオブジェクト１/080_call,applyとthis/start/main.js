//call,apply→thisや引数の参照先を変更。同時に関数を実行する。

function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Bob']); //関数が実行まで行われる。第二引数が与えられると配列が与えられる。
a.call(tim, 'Tim','Bob');


const arry = [1, 2, 3, 4, 5];

const result = Math.max(...arry); //Math.max()一番大きな数字が返ってくる
console.log(result);