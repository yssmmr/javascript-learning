//クロージャー、レキシカルスコープの変数を関数が使用している状態
//プライベート変数、関数の内部に変数を持ち外部からアクセスできないようにする

function incrementFactory() {

  let num = 0;
  //関数外からアクセスできないようにする

  function increment() {
    num += 1;
    console.log(num);
  }

  return increment;
}

const increment = incrementFactory();

increment();
increment();



