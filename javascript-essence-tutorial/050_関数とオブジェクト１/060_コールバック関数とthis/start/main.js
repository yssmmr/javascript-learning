window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fn(ref) {
    ref();
}

fn(person.hello); //関数をrefに渡しているので、this.nameはJohnになる。