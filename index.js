const mycheckBox = document.getElementById("mycheckBox");

const submitbtn = document.getElementById("submitbtn");

const myRadio1 = document.getElementById("myRadio1");

const myRadio2 = document.getElementById("myRadio2");

const myRadio3 = document.getElementById("myRadio3");

const payResult = document.getElementById("payResult");

const subResult = document.getElementById("subResult");



submitbtn.onclick = function(){
    
    if(mycheckBox.checked){
        subResult.innerText = `you are subsCribed !`;
    }
    else{
        subResult.innerText = `you are not subsCribed !`; 
    }

    if(myRadio1.checked){
        payResult.innerText = `you are pay by RAZORPAY!`; // payement radiobtn connditions 
    }

    else if(myRadio2.checked){
        payResult.innerText = `you are pay by paypal !`;
    }
    else if(myRadio3.checked){
        payResult.innerText = `you are pay by visa !`;
    }
    else{
        payResult.innerText = `you are didnt done the !`;
    }

}

