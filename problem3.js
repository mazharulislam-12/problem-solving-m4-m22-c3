function mindGame(x) {
    if (typeof x !== "number") {
        return "please provide a number";
    }
    else if (x <= 0) {
        return "please provide a positive number";
    }
    else{
        const result = (((x*3)+10)/2) - 5;
        return result
    }
}
console.log(mindGame(5));

// 01. practice -----------
function mindGame(x) {
    if (typeof x !== "number") {
        return "please provide a number";
    }
    else if (x <= 0) {
        return "please provide a possitive number";
    }
    else{
        const result = (((x*3)+10)/2)-5;
        return result
    }
}
console.log(mindGame(5));

// 02. practice -----------
function mindGame(x) {
    if (typeof x !== "number") {
        return "please provide a number";
    }
    else if (x <= 0) {
        return "please provide a positive number"
    }
    else{
        const result = (((x*3)+10)/2)-5;
        return result;
    }
}
console.log(mindGame(5));