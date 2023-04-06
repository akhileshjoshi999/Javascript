// let arr="akhilesh";
// let arr1=arr.length;
// console.log(arr1)
// let a =arr.charAt(5)
// console.log(a)
let arrr=["cat",1,2,3,4,5,6];
for (let i in arrr) {
console.log(i);  
    }
let arr={a:12,b:23,c:3};//getting keys 
for(let i in arr){
    console.log(i)
}
for (let i of Object.keys(arr)){
    console.log(i)

}
//ternary operaters
let a=10;
let b=5;
let ab=(a/b==2)?"this is true":"this is false";
console.log(ab);