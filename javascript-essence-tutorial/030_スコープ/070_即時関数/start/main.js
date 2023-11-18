//即時関数、関数定義と同時に一度だけ実行される関数
//関数呼び出しの際に再度変数に代入しなくてもよくなる。

function a() {
  console.log("called");
}

a();

let c = (function(){
  
  console.log("called");
  
  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log("privateFn is called");
  }
  function publicFn() {
    console.log("publicFn is called");
  }

  return {
    publicVal,
    publicFn
  };
})()

c.publicFn();

console.log(c.publicVal);