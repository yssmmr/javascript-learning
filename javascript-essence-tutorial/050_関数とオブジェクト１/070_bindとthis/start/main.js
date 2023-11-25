//bindを使用するとthisの取りうる参照を意図的に変更可能
//引数を固定することも可能。

window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person); //thisの参照先をpersonに変更している

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim');

b();