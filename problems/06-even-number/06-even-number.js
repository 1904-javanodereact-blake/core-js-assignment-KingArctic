/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) 
{
    if(!isNaN(someNum))
    {
        if (someNum < 0)
            someNum *= -1;

        let evenCounter = false;

        for(let x = 0; x < someNum; x++)
            {
                //console.log(`Before calculating new number, the boolean is ${evenCounter}`)
                evenCounter = !evenCounter;
                //console.log(`After calculating new number, the boolean is ${evenCounter}`)
            }
        
        //console.log(`${someNum} is ${!evenCounter}`);

        return evenCounter = !evenCounter;
    }
    else
    {
        console.log(`NOT A NUMBER!`);
        return false;
    }
}

console.log(`3 is ${isEven(3)}`);
console.log(`27 is ${isEven(27)}`);
console.log(`100 is ${isEven(100)}`);
console.log(`50 is ${isEven(50)}`);
console.log(`1583974 is ${isEven(1583974)}`);
console.log(`12 is ${isEven(12)}`);
console.log(`43 is ${isEven(43)}`);
console.log(`-323 is ${isEven(-323)}`);
console.log(`76542 is ${isEven(76542)}`);
console.log(`-7583827 is ${isEven(-7583827)}`);

console.log(`Hello is ${isEven('Hello')}`);
console.log(`NaN is ${isEven(NaN)}`);