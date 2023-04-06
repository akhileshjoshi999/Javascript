let mobile={ram:8,processor:"snapdragon",screeen:"amoled",os:"android"}
mobile.warrranty=12;
console.log(mobile)
let mobile1=new Object()
mobile1.ram=8;
mobile1.os="android";
mobile1.processor="snapdragon";
mobile1.screen="amoled";
// through function
function mob (n, s, d) {
        this.ram = n;
        this.os = s;
        this.processor = d;
    }

let ret= new mob(6,"android","snapdragon");
console.log("through function " + ret)

console.log(Object.values(mobile))
console.log(Object.keys(mobile))
console.log(Object.entries(mobile))
let mob2=Object.assign({},mobile)
console.log(mob2)


