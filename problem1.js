// integer number check-----------
function isInteger(number) {
    if (typeof number !== "number") {
        return "please provide a number"
    }
    else{
        if (number % 1 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
}
let num = isInteger(2);
console.log(num);


// 01. practice --------
function isInteger(number) {
    if (typeof number !== "number") {
     return "please provide a number"   
    }
    else{
        if (number % 1 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
}

let num = isInteger(2);
console.log(num);


// 02. practice ----------
function isInteger(number) {
    if(typeof number !== 0){
        return "please provide a number"
    }
    else{
        if (number % 1 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
}
let num = isInteger(3);
console.log(num);