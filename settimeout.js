// for(var i=0;i<5;i++){
// setTimeout(() => {
//     console.log(i);
    
// }, 4000);
// }
// for(let i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i);
        
//     }, 4000);
//     }
// let a=23;
// function ab(){
//     let a=22;
//     console.log(a);
// }
// console.log(a);

// var as=21;
// function ab(){
//     var as=25;
//     console.log(as);
// }
// console.log(as);
function closre(a){
    console.log("live viewers " +a)
    let c=4;
 function closure2(){
    let b=10;
    let sum=a+b+c;
    console.log(sum)
}
closure2();

    }
closre(22);

function closre12(a){
    console.log("live viewers " +a)
    let c=4;
 function closure23(){
    let b=10;
    // let sum=a+b+c;
    // console.log(sum)
 }
return closure23;
}

    
closre(2);





