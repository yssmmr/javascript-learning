//instanceof、どのコンストラクターから生成されたオブジェクトかを確認する
//オブジェクトがプロトタイプにコンストラクタのprototypeプロパティを持っているかを確認する演算子

function F(a, b) {
    this.a = a;
    this.b = b;
    return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1, 2);
console.log(instance instanceof F); //(判定したいオブジェクト instanceof オブジェクト名称)
console.log(instance.__proto__ === F.prototype)