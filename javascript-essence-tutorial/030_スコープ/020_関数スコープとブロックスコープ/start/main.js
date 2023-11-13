function a() {
   let b = 0;
   console.log(b);
}

a();
// 関数スコープ、変数は関数内でのみ呼び出し可能。

//ブロックとは｛｝のこと。ブロックスコープとは、{}内の範囲の事。
//変数の宣言はconstかletを使う事によりブロックスコープが成り立つ。varだと意図しない挙動をとることも。

{
   c = 1;
  console.log(c);

  function d() {
    console.log('d is called'); 
    //関数宣言ではfunctionはブロックスコープは無視される。
  }
  d();

  const f = function(){
    console.log('こんにちは');
  }
  f();
}
