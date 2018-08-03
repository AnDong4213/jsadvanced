/* import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'

console.log(util1)
fn1()
fn2() */

[1, 2, 3].map(item => {
    console.log(item + 1)
})

// 默认参数(default)的功能是在函数被调用时对参数做自动估值(若没被赋值，则自动赋值)，扩展运算符(spread)则可以将数组转换为连续的函数参数，不定参数(rest)用在参数末尾，将最末尾的参数转换为数组。不定参数(rest)让我们不再需要arguments，更直接地解决了一些常见的问题。
/* function f(x, ...y) {
    // console.log(y)   // ["hello", "uu", 90]
    // console.log(Array.from(arguments))  // [3, "hello", "uu", 90]
    // console.log(arguments)  // Arguments(4) [3, "hello", "uu", 90, callee: (...), Symbol(Symbol.iterator): ƒ]
    return x * y.length
}
console.log(f(3, 'hello', 'uu', 90)) */   // 9

/* function f2(num) {
    if (num <= 1) {
        return 1
    }
    return num * f2(num - 1)
}
console.log(f2(5)) */

/* function f2(num) {
    if (num <= 1) {
        return 1
    }
    return num * arguments.callee(num - 1)  //使用arguments.callee，调用自身，实现递归
}
console.log(f2(5)) */







