(function(window) {

    var zepto = {}

    function Z(dom, selector) {
        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        // console.log(this)
        this.length = len
        this.selector = selector || ''
    }

    zepto.Z = function (dom, selector) {
        return new Z(dom, selector)
    }

    zepto.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom, selector)
    }

    var $ = function (selector) {
        return zepto.init(selector)
    }
    window.$ = $
    // console.log($)

    $.fn = {
        css: function (key, value) {
            console.log('css')
        },
        html: function (value) {
            console.log('这是一个模拟的 html 函数')
        }
    }
    Z.prototype = $.fn

})(window)











