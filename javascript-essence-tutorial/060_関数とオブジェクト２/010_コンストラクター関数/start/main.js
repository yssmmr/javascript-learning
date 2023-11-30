//コンストラクター関数とは→新しくオブジェクトを生成するための雛型となる関数。テンプレート化。
//new演算子を用いてオブジェクトを作成することをインスタンス化という

//コンストラクター関数宣言時は大文字。
function Person(name,age) {
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 18);
const sun = new Person('Sun', 18);