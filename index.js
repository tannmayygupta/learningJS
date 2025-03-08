function sum(callback , x , y ){
    let res = x + y ;
    callback(res);
}

function displaypage(res){
    document.getElementById("myH1").innerHTML = res;
}

sum(displaypage,5,5);