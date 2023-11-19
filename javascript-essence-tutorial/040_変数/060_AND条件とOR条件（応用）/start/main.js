function hello(name) {
    name = name || 'Tom'; //nameがない場合Tomが表示されるように。
    console.log('hello ' + name);
  }

hello();

let name = 'Bob';

name && hello(name);
//nameがtruthyならばhello()に処理がうつる。

