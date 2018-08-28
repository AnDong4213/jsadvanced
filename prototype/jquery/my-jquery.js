(function(window) {

    var jQuery = function(selector) {
        return new jQuery.fn.init(selector)
        // return new kk(selector)
    }

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        css: function() {
            // console.log(this[0].nodeName)
            console.log(this)  // jQuery.fn.init {0: p, 1: p, 2: p, 3: p, length: 4, selector: "p"}
            console.log('css')
        },
        html: function() {
            console.log(this)
            console.log('html')
        }
    }
    // console.log(jQuery.fn)
    
    var init = jQuery.fn.init =function(selector) {
    // var init = kk =function(selector) {
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector))
        console.log(this)
        // var i, len = dom ? dom.length : 0;
        for(i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    init.prototype = jQuery.fn

    window.$ = jQuery

})(window)

// 通过$函数初始化jQuery实例的时候
// 那么问题来了，jQuery.fn 中的方法为什么不直接定义在 init 的prototype上，而要定义在 jQuery 的原型对象上？

/* 其实，这样做的目的是为了提高 jQuery 的查询效率，如果直接定义在 init 的 prototype 对象上，那么每执行一次查询，就会在内存中创建这样一个庞大的prototype对象，而如果把这个对象定义在jQuery的prototype上，在jQuery加载时，这个对象就会被初始化并一直存在于内存中，以后每次执行 $() 时，只需要将init中的prototype指向这个对象就可以了，而不用每次都去创建一遍相同的对象。 */





