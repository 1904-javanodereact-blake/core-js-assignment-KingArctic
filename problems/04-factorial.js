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

console.log(`5! is ${factorial(5)}`);
console.log(`10! is ${factorial(10)}`);
console.log(`-3! is ${factorial(-3)}`);
console.log(`NaN! is ${factorial(NaN)}`);
console.log(`Undefined! is ${factorial(undefined)}`);
console.log(`''! is ${factorial('')}`);
console.log(`Null! is ${factorial(null)}`);