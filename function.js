function abd(x,y=10){
    //y is default parameter
    return x+y;
}
let ab=abd(1)
console.log(ab)
//self invoking function

(function () {
    console.log("Welcome ");
})();

// (function (x) {
//     console.log(x*x);
// })(5);
