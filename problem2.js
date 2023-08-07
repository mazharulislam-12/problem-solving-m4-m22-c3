function isJavaScripFile(filename) {
    if (typeof filename !==  "string") {
        return "please provide a valid file name (string)";
    }
    else{
        // if (filename.toLocaleLowerCase().endsWith('.js') === true) {
        //     return true;
        // }
        // else{
        //     return false;
        // }
       return filename.toLocaleLowerCase().endsWith(".js") 
    }
}
console.log(isJavaScripFile("hello.js"));

// 01. practice ------
function isJavaScripFile(filename) {
    if (typeof filename !== "string") {
        return "please provide a valid file name (string)"
    }
    else{
        return filename.toLocaleLowerCase().endsWith(".js")
    }
}
console.log(isJavaScripFile("app.js"));


// 02. practice ------------
function isJavaScripFile(filename) {
    if (typeof filename !== "string") {
        return "please provide a valid file name (string)"
    }
    else{
        return filename.toLocaleLowerCase().endsWith('.js')
    }
}
console.log(isJavaScripFile("app.js"));
