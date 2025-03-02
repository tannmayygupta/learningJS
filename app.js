// alert("Heyy samiksha mam")

// let l = prompt("i like you mam, guess whi is this")

// console.log(l)

// let l = prompt("Enter name of my mam");

// if(l.toLowerCase()==="samiksha"){
//     alert("Hello mam, i welcome you <3");
// }
// else{
//     alert("you are not my mam ");
// }


// let p = Math.random();

// if (p >=0.5){
//     console.log(p+"is gr8 than");
// }
// else{
//     cons
// }


// password
// password should be more than 6 char 
// password should not have space 

// let pass = prompt("Enter the password");

// if(pass.length >= 6 ){
//     if(pass.indexOf(" ") === -1){
//         console.log("valid password");
//     }
//     else{
//         alert("password no space should be there");
//     }
// }
// else{
//     alert("password should be greater than 6 char");
// }

let userName ;

document.getElementById("mySubmit").onclick = function (){
    userName = document.getElementById("myInput").value;
    document.getElementById("myH1").innerHTML = `Hello ${userName}`
}