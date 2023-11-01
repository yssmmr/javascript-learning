function a() {
}
function b() {
    a();
}
function c() {
    b();
}
c();

//コールスタック＝実行中のコードがたどってきたコンテキストの積み重ね