 //variables
//  var a=100;
//  let b=200;
//  const c=300;

// console.log(a);
// console.log(b);
// console.log(c);
//Number
// let a=10;
// let b=10.5;
// console.log(a);
// console.log(b);
// console.log(typeof(a));
// console.log(typeof(b));
// //String
// let cname="BIT";
// console.log(cname);
// //Boolean
// let pass=true;
// console.log(pass);
// console.log(typeof(pass));
// //null
// let data=null;
// console.log(typeof(data));
// let marks=Number(prompt(""));
// if (marks >= 90) {
//     console.log("A");
// }
// else if (marks >= 60 && marks <= 89) {
//     console.log("B");
// }
// else {
//     console.log("C");
// }
// const add=(a,b=2) =>a*b;
// console.log(add(10));

// function greet(name,callback){
//     console.log(name);
//    callback("for visiting bit");
//    hello("to be in future");

// }
// function Thanks(name1){
//     console.log("Thanks",name1);
   

// }
//  function hello(name2){
//     console.log("Stay ahead",name2);
//  }

// greet("welcome to bit",Thanks);

// setTimeout(() =>{
    // console.log("T BUU")},3000)
    let arr=[1,2,3,4,5]
    let ans=arr.map((val)=>val*2)
    console.log(ans)
    let evennum=arr.filter((val)=>val%2==0)
    console.log(evennum)
    let oddnum=arr.filter((val)=>val%2!=0)
    console.log(oddnum)
    let totalsum=arr.reduce((acc,val)=>acc+val);
    console.log(totalsum)
    let multiply=arr.reduce((acc,val)=>acc*val);
    console.log(multiply)
    let multiply2=arr.reduce((acc,val)=>acc*val);
    console.log(multiply2)



