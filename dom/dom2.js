// alert('hety');
// let a=document.getElementById('id');
// console.log(a);
// let b=document.getElementsByClassName('cls')
// console.log(b)
let c=document.getElementsByTagName('h1')
console.log(c);
// let d=document.querySelector('.parent')
// let parent=id.parentNode;
// console.log(parent)
// const parent=document.querySelector('.parent')
// console.log(parent.childNodes)
//1->nextelementsibling

// const id=document.querySelector('h1')
// console.log(id.nextElementSibling);

//2->previouselementsibling

// const clss=document.querySelector('h2')
// console.log(clss.previousElementSibling);
// // manipulation
// const f=document.querySelector('h1')
// f.innerHTML='i am changing content'
// f.style.color='red'
// f.style.fontSize='30px'
// let hello=()=>{
//    alert("event activated")

// }

//click by addeventlistner
let clik=document.getElementById("but");
clik.addEventListener("click",function(){
 alert("click is working")
});

//double click
let dblcl=document.getElementById("abb")
dblcl.addEventListener('dblclick',fun1);
function fun1(){
alert("doubleclick is working")
}
//mouseover
// let hey=document.getElementById("abb")
// hey.addEventListener("mouseover",fun12);
// function fun12(){
// alert("mouse over is working")
// }
let inpt=document.getElementById("input")
inpt.addEventListener("keypress",function(){
    alert("key is pressed")
});
//key up down


let display = document.getElementById("display");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});
