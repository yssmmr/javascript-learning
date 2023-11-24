//this→呼び出し元のオブジェクトへの参照を保持するキーワード
//thisの参照先は実行コンテキストによって変わる

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name) //personのオブジェクトnameを呼び出す。
    }
}

person.hello();