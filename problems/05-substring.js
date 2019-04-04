/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) 
{
    let newStr = '';
    
    //console.log(someStr)

    if (startIndex > endIndex) { return '"Uh Oh! Please make sure your starting point is less than your ending point"'; }

        
    if (!isNaN(someStr))
    {
        if(someStr !== null) 
        someStr = someStr.toString(); 
    }
    if (typeof(someStr) == typeof(''))
    {
        //console.log(someStr);
        if (endIndex > someStr.length) { return `"Uh Oh! Please make sure your ending point is less than your string's length"`; }
        for (let x = startIndex; x < endIndex; x++)
        {
            //console.log(someStr[x]);
            //console.log(someStr[x]);
            newStr += someStr[x];
            //console.log(newStr);
        }

        return newStr;
    }

    return '"Uh Oh! You inputed something invalid"';
}

console.log(`Hello substring of 0 and 3 is ${substring('Hello', 0, 3)}\n`);
console.log(`null sustring of 0 and 4 is ${substring(null, 0, 4)}\n`);
console.log(`AHahAHahAHahAH substring of 5 and 2 is ${substring('AHahAHahAHahAH', 5, 2)}\n`);
console.log(`Well goodbye substring of 2 and 7 is ${substring('Well goodbye', 2, 7)}\n`);
console.log(`1234567896 substring of 2 and 4 is ${substring(1234567896, 2, 4)}\n`);
console.log(`NaN substring of 0 and 3 is ${substring(NaN, 0, 3)}\n`);
console.log(`Hello substring of 2 and 10 is ${substring('Hello', 2, 10)}\n`);