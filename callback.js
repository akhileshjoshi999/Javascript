function registration(callback)
{
    setTimeout(()=>{
        console.log("registration start")
        callback()
    },2000)
}
function loginstart(callback)
{
    setTimeout(()=>{
        console.log("login  start")
        callback();
    },4000)
}
function loginend()
{
    setTimeout(()=>{
        console.log("logout")
    },1000)
}
function getuserdata(callback)
{
    setTimeout(()=>{
        console.log("Get user data")
        callback();
    },5000)
}
//callback hell
registration(function(){
    loginstart(function(){
        getuserdata(function(){
            loginend()
        })
        
    })

});
console.log("sabse pehle start ")
