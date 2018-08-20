(function(window) {

    var jQuery = function(selector) {
        return new jQuery.fn.init(selector)
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
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector))

        var i, len = dom ? dom.length : 0;
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







