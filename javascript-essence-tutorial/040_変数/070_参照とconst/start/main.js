//const a = 'hello';
//a = 'bye';
//constを使用するとプリミティブ型の再代入は不可


const b = {
  prop: 'hello'
}

//b= {}
b.prop = 'bye'
console.log(b);

//constを使用すると、オブジェクトの再代入はできないがプロパティを変更する事は可能。
