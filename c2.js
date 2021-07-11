//  Fizz Buzz(mycode)
/*
let num = 1;
while (num <= 100){
    if (num%3==0&&num%5==0){
        console.log("fizzbuzz", num);
    }
    else if(num%3==0&&!num%5==0){
        console.log("fizz", num);
    }
    else if (!num%3==0&&num%5==0) {
        console.log("buzz", num);
    } 
    else {
        console.log(num);
    }
 num+=1;
}
*/

//  FizzBuzzBook Solution

/*
let n = 1;

while(n <= 100){
    let output =" ";
    if(n%3==0) output += "fizz";
    if(n%5==0) output += "buzz";
    console.log(n,output);
    n++;
}
*/

// Chess (book solution))
let size = 8;
let board = ""
let x,y;
for (  x = 0; x < size; x++ )
{   
    for(  y =0; y < size; y++ )
    {
        if( (x+y) % 2 == 0){
            board += " ";    
        }
        else {
            board += "#";
        }
    }
    board += "\n";
    

}
console.log(board);
