try{
    let age=29;
    if (age>20){

        throw new ReferenceError("this is not valid")

    }


}
catch(error){
console.log(error.name)
console.log(error.message)
// console.log(hey)
}
// console.log("script is still running")

finally{
    console.log("this is finally block which always exicuted")

}