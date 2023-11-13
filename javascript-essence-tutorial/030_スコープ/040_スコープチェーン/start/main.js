let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        console.log(a);

        if (true) {
            var a = 3;
        }

    }
    fn2();
}
fn1();

//スコープチェーン、スコープが複数階層で連なっている状態。



