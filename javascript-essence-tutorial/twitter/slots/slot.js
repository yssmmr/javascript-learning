<script>
  document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectirAll('.clock-404 p');
    // document.querySelectorAll('〇〇')→（）内で指定されたCSSのセレクタにマッチする要素全てを取得
    const finalNumbers = ['4', '0', '4'];
    const intervalTime = 50; //数字が変わる間隔（ミリ秒）
    
    slots.forEach((slot, index) => {
      const intervalid = setInterval(() => {
        //　setInervalで定期的な実行処理が作れる
        const randomNum = Math.floor(Math.random() * 10); //0～9までのランダムな数字
        slot.textContent = randomNum;
        // 〇〇.textContent→文字として出力
      }, intervalTime);

      //　指定した時間後に数字を固定
      // setTimeoutは指定時間経過後、一度だけ関数を実行します
      setTimeout(() => {
        clearInterval(intervalid); //clearIntervalで定期実行処理をストップできる
        slot.textContent = finalNumbers[index];
      }, 1000 + 1000 * index);
    });
  });
</script>