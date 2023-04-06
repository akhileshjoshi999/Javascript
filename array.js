let arr=[1,3,4,54,5];
console.log(arr)
arr.push(6);
console.log("element added-> "+arr)
arr.pop()
console.log("last element removed= "+arr)
arr.shift()
console.log("first element remvoed= "+arr)
arr.unshift(12)
console.log("added first element= "+arr)
let a1=[2,3,4,5]
let a2=[32,23,4,5]
let arry=a1.concat(a2)
console.log(arry);
let s=arry.join(" #")
console.log(s)
let rev=arry.reverse()
console.log(rev)
arry.splice(2,2,27,57)
console.log(arry)