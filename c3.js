// Minimum function

// function min(a, b){
//     if ( a > b ) return b;
//      else return a;
// }
// console.log(min(010, 2));



// Recursion

function isEven(num){
    if(num == 0) return true;
    else if(num == 1) return false;
    else if(num < 0) return isEven(-num);
    else return isEven( num - 2 );
    
}
console.log(isEven(prompt()));



// Bean Counting

function countBs(string){
    let bs = 0;
    if (typeof string == "string"){
        for (let n = 0; n < string.length; n++) {
            if(string[n] === "B") bs++;
        }
        return bs;
    }
}
function countChar(string, char){
    let num = 0;
    if (typeof string == "string"){
        for (let n = 0; n < string.length; n++) {
            if(string[n] === char) num++;
        }
        return num;
    }
}

console.log(countChar("Sagar is FrontEndProgrammer", "m"));
