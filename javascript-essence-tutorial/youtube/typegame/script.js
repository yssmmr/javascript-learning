const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay")
//idがtypeDisplayの要素を取得する。

//　非同期でランダムな文章を取得する。
function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json()) //.then→fetchし終えたらjsonに変換
  .then((data) => data.content); 
}

// ランダムな文章を取得して表示する
//「async」は「function」の前に記述するだけで非同期処理を実行できる関数を定義
//「await」はPromise処理の結果が返ってくるまで一時停止してくれる
//「await」は「async」で定義された関数の中だけでしか使えない

async function RenderNextSentence() {
  const sentence = await GetRandomSentence();
  console.log(sentence);

  typeDisplay.innerText = sentence;
}

RenderNextSentence();

