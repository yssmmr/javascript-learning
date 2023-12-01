//プロトタイプ→オブジェクトに存在する特別なプロパティー、コンストラクター関数と合わせて使用
//プロトタイプを使うと余分なメモリを消費しない。各インスタンスに渡すのはオブジェクトの参照になる。

function Person(name, age) {
    this.name = name;
    this.age = age;
}

//コンストラクター関数で使用したいメソッドを追加
Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();