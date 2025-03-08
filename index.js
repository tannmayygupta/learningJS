// forEach() = method used to iterate over the lement in array and apply a specific callback function ;


let arr = [1,2,3,4,5];

arr.forEach(display); // here forEach calback fuc have parameter or attribute element , 

arr.forEach(double); // here forEach calback fuc have parameter or attribute element , 

arr.forEach(triple); // here forEach calback fuc have parameter or attribute element , 

// arr.forEach(display); // here forEach calback fuc have parameter or attribute element , 

// function double(element , index , array){
//     array[index] = element * 2 ;
// }

function triple(element , index , array){
    // array[index] = element * 3 ;
    console.log(element * 3);

}

function display(element){
    console.log(element);
}
