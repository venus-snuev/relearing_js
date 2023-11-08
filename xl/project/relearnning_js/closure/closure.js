let button = document.getElementById('but');
// button.addEventListener("click", function buttenEventHandler() {
//     for(var i=1; i<=5;i++) {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i*1000);
//     }
// });


//      1.
// button.addEventListener("click", function buttenEventHandler() {
//     for(var i=1; i<=5;i++) {
//         //使用立即执行函数改造
//         (function() {
//             let j = i;
//             setTimeout(function timer() {
//                 console.log(j);
//             }, i*1000);
//         })();
        
//     }
// });
button.addEventListener("click", function buttenEventHandler() {
    for(var i=1; i<=5;i++) {
        //使用立即执行函数改造
        (function(j) {
            setTimeout(function timer() {
                console.log(j);
            }, i*1000);
        })(i);
        
    }
});