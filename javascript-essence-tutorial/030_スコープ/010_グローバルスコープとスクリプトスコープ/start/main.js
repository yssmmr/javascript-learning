let a = 0; //letだとスクリプトスコープに保持される
var b = 0; //varだとグローバルスコープに格納されwindowオブジェクトのプロパティとして保持される
function c() {}
debugger; //ブラウザで開発ツールを開くとdebuggerに達した時点で動作が止まる

console.log(b);