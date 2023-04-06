function registration()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("registration start")
            // resolve()
          reject('error while registering')
        },2000)
    })
};

function loginstart()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login  start")
           resolve()

        },4000)

    })
  
}
function loginend()
{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("logout")

            resolve()
        },1000)


    })
 
}
function getuserdata()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Get user data")
           resolve()
        },5000)
    })
 
}

// registration()
// .then(loginstart)
// .then(getuserdata)
// .then(loginend).catch((err)=>{
//     console.log("..." +err)
// });


//async and await

async function authentication(){
    try{
        await registration()
        await loginstart()
        await getuserdata()
        await loginend()
    }
    catch(err){
        console.log(err)

    }
   

}
  authentication().then(()=>{
    console.log("all set ...")
  });
  
console.log("sabse pehle start ");
