//コールバック関数→他の関数に引数として渡される関数

function hello(name) {
  console.log('hello ' + name);
}

function bye() {
  console.log('bye');
}

function fn(cb) {
  cb('Tom');
}

fn(hello);
fn(bye);