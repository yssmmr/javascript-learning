const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay")
//idがtypeDisplayの要素を取得する。

const typeInput = document.getElementById("typeInput");
const timer = document.getElementById("timer");
const typeSound = new Audio("./sound/typing-sound.mp3")
const wrongSound = new Audio("./sound/wrong.mp3")
const correctSound = new Audio("./sound/correct.mp3")

//　inputテキスト入力　あっているかどうかの判定。
typeInput.addEventListener("input", () => {

  // タイプ音を付ける
  typeSound.play();
  typeSound.currentTime = 0;


  const sentenceArray = typeDisplay.querySelectorAll("span");
  // console.log(sentenceArray);
  const arrayValue = typeInput.value.split("");
  // console.log(arrayValue);
  let correct = true;

  sentenceArray.forEach((characterSpan, index) => {
    if ((arrayValue[index]) == null){
      characterSpan.classList.remove("correct")
      characterSpan.classList.remove("incorrect")
      correct = false;
    } else if(characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      
      wrongSound.volume = 0.3; //ボリュームが調整できる
      wrongSound.play();
      wrongSound.currentTime = 0;

      corect = false;
    } 
  });
  if(correct == true) {
    correctSound.play();
    correctSound.currentTime = 0;
    RenderNextSentence();
  }
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
  typeInput.value = "";

  StartTimer();
}

let startTIme;

let originTime = 50;
function StartTimer(){
  timer.innerText = originTime; 
  startTime = new Date(); //現在の時刻を呼び出す
  // console.log(startTime);
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
    if (timer.innerText <= 0) TimeUp();
  }, 1000);
}
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000 );
}

//　時間経過後に次のテキストを呼び出し
function TimeUp() {
  RenderNextSentence();
}

RenderNextSentence();

