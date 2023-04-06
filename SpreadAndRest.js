let arry=[1,2,3,4,5];

let arr=arry.map((i)=>{return i*2

    
})
let red=arry.reduce((a,b,c)=>{
    return a+b+c;
})
console.log(arr);
console.log(red)

function formArguments(){
let args=Array.from(arguments);
let finalargs=args.map((i)=>i)
    console.log(finalargs)

}
formArguments(1,2,3,4);//arguments return krta hai object ko .array.from object ko array me convert kar deta h
formArguments(5,6,7,7,8)
let onearray=[1,2,3,4]
let twoarray=[5,6,67,87,3]
let threearray=[100,...onearray,...twoarray];
console.log(threearray)
//for string

let onestring="akhilesh"
let store=[...onestring]
console.log(store);
let rev=store.reverse();
console.log(rev)
//object
let obj={id:1,name:"akhilesh",salary:10000,arr1:[1,3,4,4]}
console.log(obj)
let obj2={
    ...obj
}
obj2.arr1.push('23')

console.log(obj2)
//rest operators
function rest(...numbers){
    return a+b+c;


}
rest(1,2,3,4,5)
//learning rest
function rest(...numbers){
    console.log(numbers)
    let store=0;
    for(let num of numbers){
        store+=num;
    }
return store;
 }
 console.log(rest(1,3,4,5,10));//with the help of rest we can have multiple parameters 
console.log(store);
 //modifying

 function rest(n1,n2,...numbers){
    console.log(numbers)
    let store=0;
    for(let num of numbers){
        store+=num;
    }
return store;
 }
 console.log(rest(1,3,10,5));//with the help of rest we can have multiple parameters 
console.log(store);
// modifying
function rest(...numbers){
    console.log(numbers)
    let store=0;
    for(let num of numbers){
        store+=num;
    }
return store;
 }
 let cons=[1,2,3,4,5]

console.log(rest(...cons));
//...
let beckend=[1,3,3,522,6,7,87]// packed in array
console.log(Math.max(...beckend))//spread

//destructuring
let obj3={id:1,name:"akhil" ,salr:1000}
let {name,...address}=obj3;
console.log(name,address);//rest ,adress id or salr ko pack kr de raha h ek object meai