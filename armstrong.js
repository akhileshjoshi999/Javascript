let a=2
let b=3
let c=Math.pow(a,b)
console.log(c)

const armstrong=(n)=>{
    let sum=0,ans=0,digit=0,temp;
    temp=n;
    while(temp>0)
    {
        temp=parseInt(temp/10);
        digit++;
    }
temp=n;
while(temp>0){
    sum=temp%10;
    ans=ans+Math.pow(sum,digit);
    temp=parseInt(temp/10);

}
if(ans==n){
    console.log(n+" "+"is armstrong no")
}
else{
console.log(n+" "+"is not armstrong no")
    }
}
armstrong(123)