const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay")
//idがtypeDisplayの要素を取得する。

const typeInput = document.getElementById("typeInput");

const timer = document.getElementById("timer");

//　inputテキスト入力　あっているかどうかの判定。
typeInput.addEventListener("input", () => {
  const sentenceArray = typeDisplay.querySelectorAll("span");
  // console.log(sentenceArray);
  const arrayValue = typeInput.value.split("");
  // console.log(arrayValue);
  sentenceArray.forEach((characterSpan, index) => {
    if ((arrayValue[index]) == null){
      characterSpan.classList.remove("correct")
      characterSpan.classList.remove("incorrect")
    } else if(characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
    } 
  })
})

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

  typeDisplay.innerText = "";
  //文章を一文字ずつ分解し、spanタグを生成
  let onetext = sentence.split("");
  onetext.forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    // console.log(characterSpan);
    typeDisplay.appendChild(characterSpan);
    //characterSpan.classList.add("correct"); //correctというクラス名を付ける
  });

  //テキストボックスの中身を消す
  typeInput.innerText = "";

  StartTimer();
}

let startTIme;

let originTime = 30;
function StartTimer(){
  timer.innerText = originTime; 
  startTime = new Date();
  // console.log(startTime);
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
  }, 1000);
}
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000 );
}

RenderNextSentence();

