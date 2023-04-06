//find no is prime or not
console.log("hello")
const sum=(n)=>{
    let temp=0;
    for(i=2;i<n/2;i++){
if(n%i==0){
temp++;
}}
if(temp>0)
console.log(n+" is not prime ")
else{
    console.log(n+" is  prime")
}
}
sum(13)