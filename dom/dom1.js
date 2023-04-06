// alert('test');
// var items=document.getElementsByClassName('box');
// console.log(items);
// items[0].textContent='animation';
// items[1].textContent='hello';
// var headline=document.querySelector('#head');
// headline.style.color='red';
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
let a =document.querySelector('#tagname');
let b=document.querySelector('.heade')
console.log(b)
console.log(a)
// document.getElementById('img1').onmouseover=abc;
// function abc(){
//     document.getElementById('img1').style.filter='grayscale(100%)';
// }
//addeventlistner
document.getElementById('img1').addEventListener("mouseover",function(){this.style.filter='grayscale(100%)';});
document.getElementById('img1').addEventListener("mouseout",function(){this.style.filter='grayscale(0%)';});
let hide=()=>{
   document.getElementById("btn").innerText="Namaste";
   
}
document.getElementById('img1').addEventListener("onclick",function(){this.style.filter='blur(50px)';});
let chang=document.getElementById("tagname")
console.log(chang.innerHTML)
// console.log(chang.innerText)
let ch=document.getElementsByClassName("box")
console.log(ch[1].innerHTML)
ch[2].innerText="helloo"
ch[2].style.color="red"
ch.className="halo"
let v=document.querySelector(".heade")
v.className="hallo"
//append child means ek element add kiya javascript ki help se
let store=document.createElement("h1");
store.className="storage";
store.style.fontsize="25px";
store.textContent="hello is this working?";

console.log(store)
document.body.appendChild(store)
//remove element
// let as=document.querySelector("ul")
// let sa=document.querySelectorAll("li")
// for(let i of sa)
// as.removeChild(sa);
document.addEventListener("click",hidea());
function hidea(){
   document.getElementsByClassName("heade").innerHTML="clicked";
}
// document.addEventListener("click",function (){document.getElementById("tagname").innerHTML="namaste"});
let butt=document.getElementById("buttn");
let func=()=>{
    let val="0123456789ABCDEF"
    let con="#";
    for(i=0;i<6;i++)
    {
        con=con+val[Math.floor(Math.random()*16)];
    }
return con;
}
function fn(){
    document.body.style.backgroundColor=func();
}
butt.addEventListener("click",fn)