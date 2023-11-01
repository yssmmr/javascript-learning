//ホイスティング＝コンテキスト内で宣言した変数や関数の定義をコード実行前にメモリーに配置する事

a();

function a() {
    console.log('a is called');
}

var b = 0;
console.log(b);

//varであれば、コンテキストの初期値がundefinedで設定される。非推奨。