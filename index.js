// forEach() = method used to iterate over the lement in array and apply a specific callback function ;


let fruit = ["apple","banana","cherry"];

fruit.forEach(upperCase);
fruit.forEach(display);

fruit.forEach(lowercase);
fruit.forEach(display);

fruit.forEach(firstletterCap);
fruit.forEach(display);

function upperCase(element, index , array){
    array[index] = element.toUpperCase();
}

function lowercase(element, index , array){
    array[index] = element.toLowerCase();
}

function firstletterCap(element, index , array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}