// function* f() {
//     console.log('执行了！')
// }
//
// var generator = f();
//
// setTimeout(function () {
//     generator.next()
// }, 2000);





const ax = require("axios");
const url = "http://vue.api.comcto.com/api/helloworld.php";
ax.get(url).then(function(d){
    console.log(d.status)
    console.log(d.data)
})