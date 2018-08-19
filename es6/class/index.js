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







