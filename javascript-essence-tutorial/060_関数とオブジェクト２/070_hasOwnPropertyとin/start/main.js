function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty('hello')
console.log(result);

console.log("name" in bob);
// __proto__にbobという文字列、もしくはメソッドが格納されているか調べる
