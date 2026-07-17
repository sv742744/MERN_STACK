const vegetables=["onion","brinjal","potato","carrt","cauliflower"];
//vegetables.forEach(veg=>console.log(veg));
function something(m,callback){
    console.log(m+"something something");
    callback();

}
function character(){
    console.log("jayamravi , trishaa");

}
//something("movie : ",character);
let promise=new Promise((resolve,reject)=>{
    resolve("sucees");
});
//promise.then(result=>console.log(result));
async function sum() {
    return 7+8;
}
//sum().then(console.log);
let std={
    Name:"jeevan",
    Age:20,

};
let json=JSON.stringify(std);
console.log(json)