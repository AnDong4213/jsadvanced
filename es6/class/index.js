function fn() {
    console.log('real', this);  // {a: 100}

    var arr = [1, 2];
    /* arr.map(function() {
        console.log(this); // window
    }) */
    arr.map(item => {
        console.log(this); // {a: 100}
    })

}
fn.call({a: 100})

/* function box() {
    a = 100;
}
box()
console.log(a) */

// 也就是循环后得到的最大的i值。因为b[i]调用的是匿名函数，匿名函数并没有自我执行，等到调用的时候，box()已执行完毕，i早已变成5，所以最终的结果就是5个5。
/* function box() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = function () {
			console.log(i)
		};
	}
	return arr;
}
var b = box()
for (var i = 0;i < b.length;i++) {
    b[i]()
} */

// 我们通过匿名函数自我执行，立即把结果赋值给a[i]。每一个i，是调用方通过按值传递的，所以最终返回的都是指定的递增的i。而不是box()函数里的i。
/* function box() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = (function (haha) {
			console.log(haha)
		})(i);
	}
	return arr;
}
var b = box()
for (var i = 0;i < b.length;i++) {
    b[i]
} */

// 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6
function box() {
	var arr = [];
	for (let i = 0; i < 5; i++) {
		arr[i] = function () {
			console.log(i)
		};
	}
	return arr;
}
var b = box()
for (var i = 0;i < b.length;i++) {
    b[i]()
}

// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i); // 三个abc  输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域
}

// ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。