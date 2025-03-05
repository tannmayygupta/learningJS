const temp = document.getElementById("temp");

const celtoFar = document.getElementById("celtoFar");

const fartoCel = document.getElementById("fartoCel");

const result = document.getElementById("result");

let c ; 


function convert(){
    if(fartoCel.checked){

        c = (parseInt(temp.value) - 32)*5/9 ;
        console.log(c);
        result.innerHTML = `far to cel ${c} °C`;
    }
    else if(celtoFar.checked){

        c = (parseInt(temp.value) * 9 / 5) + 32;
        result.innerHTML = `cel to far ${c} °F `;
    }
    else{
        result.innerHTML = "Select a unit";
    }
}
