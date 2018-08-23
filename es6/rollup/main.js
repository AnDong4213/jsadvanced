function pro() {
    return new Promise((resolve,reject) => {
        resolve('uu')
    })
}
pro().then(data => {
    console.log(data)
})
