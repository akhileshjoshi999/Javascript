function stringcomp(s){
let ans=""+s.charAt(0);
let count=1;
for(let i=1;i<s.length;i++){
    let curr=s.charAt(i);
    let prev=s.charAt(i-1);
    if(curr==prev){
        count++;

    }
else{
    ans+=count;
    count=1;
    ans+=curr;

}
}
ans+=count;
console.log(ans);
}
let s="aaabbbbcccee";
stringcomp(s);