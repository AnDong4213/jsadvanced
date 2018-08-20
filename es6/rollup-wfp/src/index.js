import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'

console.log(util1)
fn1()
fn2()


let src = 'https://static.firefoxchina.cn/img/201808/8_5b74cf38ec1990.jpg';
let src2 = 'https://static.firefoxchina.cn/img/201808/8_5b74cf38ec1990.jpg';
function loadImg(src, callback, fail) {
    let img = document.createElement('img');
    img.onload = function() {
        callback(img)
    }
    img.onerror = function() {
        fail()
    }
    img.src = src;
    document.body.appendChild(img)
}
loadImg(src, function(img) {
    console.log('aa', img.width)
}, function() {
    console.log('failed')
})

function loadImg2(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('w我是Error')
        }
        img.src = src;
        document.body.appendChild(img)
    })
}
loadImg2(src2).then((img) => {
    console.log('bb', img.height);
    return img
}, (err) => {
    console.log(err)
})
.then(function(img) {
    console.log('cc', img.width)
})
.catch(error => {
    console.log(error)
})

/* var obj = {a: 100, b: 222, c: 333};
for (var item in obj) {
    console.log(item)
}
console.log(item) */ // 返回最后一个 c

const obj = {a: 100, b: 222, c: 333};
for (let item in obj) {
    console.log(item)
}
// console.log(item);  // item is not defined

