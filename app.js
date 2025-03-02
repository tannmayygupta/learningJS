let myBtn = document.getElementById("myBtn");

let mylabel1 = document.getElementById("mylabel1");
let mylabel2 = document.getElementById("mylabel2");
let mylabel3 = document.getElementById("mylabel3");


let min = 1 ;

let max = 6 ; //  if said random no. btwn 50 - 100 then min will be 50 and max will be 100 

let randomNum1 ;
let randomNum2 ;
let randomNum3 ;


myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max ) + min ;
    randomNum2 = Math.floor(Math.random() * max ) + min ;
    randomNum3 = Math.floor(Math.random() * max ) + min ;
    mylabel1.innerHTML = randomNum1 ;
    mylabel2.innerHTML = randomNum2 ;
    mylabel3.innerHTML = randomNum3 ;
    
}

