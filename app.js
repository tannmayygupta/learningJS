const incrementBtn = document.getElementById("incrementBtn");

const resetBtn = document.getElementById("resetBtn");

const decrementBtn = document.getElementById("decrementBtn");

const countlabel = document.getElementById("countlabel");

let count = 0 ;

incrementBtn.onclick = function(){
    count++;
    countlabel.innerHTML = count ;
}

decrementBtn.onclick = function(){
    count--;
    countlabel.innerHTML = count ;
}

resetBtn.onclick = function(){
    count = 0 ;
    countlabel.innerHTML = count ;
}
