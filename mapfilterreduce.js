//map 

let arr=[1,3,4,5,65,6];
let a=arr.map((value,index,array)=>{
    console.log(value,index,arr);
    return value+index;
    
});
console.log(a)


//filter

let b=arr.filter((less)=>{
return less<10;
})
console.log(b);

// reduce


let c=arr.reduce((a,b)=>{
    return a+b;
})
console.log(c)