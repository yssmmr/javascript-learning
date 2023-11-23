function a() {
  console.log('hello');
}

a.prop = 0;
a.method = function() {
  console.log('method');
}

a();
a.method();
console.log(a.prop);

//関数宣言で定義した関数に対してドット記法でプロパティーやメソッドを登録できるので関数はオブジェクトである
//()を末尾につけると関数が実行される。