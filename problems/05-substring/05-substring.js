/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) 
{
    let newStr = '';
    
    console.log(someStr)

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

console.log(substring('Hello', 0, 3));
console.log(substring(null, 0, 4));
console.log(substring('AHahAHahAHahAH', 5, 2));
console.log(substring('Well goodbye', 2, 7));
console.log(substring(1234567896, 2, 4));
console.log(substring(NaN, 0, 3));
console.log(substring('Hello', 2, 10));