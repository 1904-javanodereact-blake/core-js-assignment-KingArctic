/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) 
{
    if (!isNaN(n))
    {
        let fib1 = 0;
        let fib2 = 1;
        let fib3 = 0;
        for (let x = 0; x < n; x++)
        {
            //console.log(fib2);
            if (x == 0)
            {
                 fib2 = 1;
            }
            else
            {
                fib3 = fib2 + fib1;
                fib1 = fib2;
                fib2 = fib3;
            }
        }
        return fib3;
    }
    else
        return '"Uh Oh! You inputed something invalid"';
}


for (let y = 0; y < 10; y++)
{
    let num = Math.floor(Math.random() * 20);
    console.log(`Term ${num} is ${fib(num)} in the Fibonacci sequence\n`);
}

console.log(`Term Hello is ${fib('Hello')} in the Fibonacci sequence\n`);
console.log(`Term Null is ${fib(null)} in the Fibonacci sequence\n`);