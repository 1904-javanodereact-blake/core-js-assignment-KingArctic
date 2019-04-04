/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) 
{
    if(isNaN(someNum))
    {
        //console.log(someNum);
        return NaN;
    }
    else
    {
        //console.log(`Currently working.`)
        if (someNum === 1) { return 1; }
        
        else if (someNum > 0)
        {
            return someNum * factorial(someNum - 1);
        }
        
        else if (someNum < 0) { return 0; }
    }
}

console.log(`5! is ${factorial(5)}\n`);
console.log(`10! is ${factorial(10)}\n`);
console.log(`-3! is ${factorial(-3)}\n`);
console.log(`NaN! is ${factorial(NaN)}\n`);
console.log(`Undefined! is ${factorial(undefined)}\n`);
console.log(`''! is ${factorial('')}\n`);
console.log(`Null! is ${factorial(null)}\n`);