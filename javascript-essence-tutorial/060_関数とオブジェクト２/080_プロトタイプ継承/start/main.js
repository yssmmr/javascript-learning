//プロトタイプ継承→別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること。

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
  console.log("Konnichiwa" + this.name);
}
const taro = new Japanese("Taro", 23);
console.log(taro);

taro.hello();