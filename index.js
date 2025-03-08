function RandomPasswordGen(length , includelower , includeupper , includesymbol) {
    
    const lowalpha = "abcdefghijklmnopqrstuvwxyz" ;
    const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

    const numberChar = "0123456789";

    const symbol = "!@#$%^&*(_)=+/*-" ;

    let allowerchar = "";

    let password = "" ;

    allowerchar += includelower ? lowalpha : "" ;

    allowerchar += includeupper ? upperalpha : "" ;

    allowerchar += includesymbol ? symbol : "" ;

    allowerchar += length ? numberChar : "" ;

    if(length < 0){
        return `password length should be more than 0` ;
    }
    else if(allowerchar.length === 0){
        return `password must have atleast 1 set of character`;
    }

    // now what we will do is we will generate an random index so that we can get a random password 

    for(let i = 0 ; i < length ; i++){
        const randomInd = Math.floor(Math.random() * allowerchar.length);
        password +=allowerchar[randomInd];
    }

    return password ;

}


const length = 12 ;

const includelower = true ;

const includesymbol = true ;

const includeupper = true ;

const password = RandomPasswordGen(length , includelower , includeupper , includesymbol );

console.log(password);