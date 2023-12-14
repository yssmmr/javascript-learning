//プロトタイプチェーン→プロトタイプの多重形成の事
//呼び出し先の優先順位が決まっている、1.自身のプロパティ 2.コンストラクターが持っているプロトタイプのメソッド

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log('Ownproperty: hello ' + this.name);
  } 
}

//Person.prototype.hello = function() {
//  console.log('Person: hello ' + this.name);
//}

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello();

const result = bob.hasOwnProperty("name") //プロパティ名があるかどうか確認できる
console.log(result);