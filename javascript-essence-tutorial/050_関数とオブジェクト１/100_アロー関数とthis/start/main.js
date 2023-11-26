//アロー関数ではthisの値がセットされない。

window.name = 'John';
const a = () => console.log('Bye ' + this.name);

const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name); //アロー関数だとグローバルスコープを探しに行く
        a();
    }
}
//person.hello();

function b() {
    const a = () => console.log('Bye ' + this.name)
    a();
} 

b();