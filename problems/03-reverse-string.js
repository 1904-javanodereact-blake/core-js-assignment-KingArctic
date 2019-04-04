/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr)
{
    let newStr = '';
    if (!isNaN(someStr))
    {
        if(someStr !== null) 
            someStr = someStr.toString(); 
    }
    if (typeof(someStr) == typeof(''))
    {
        for (let x = (someStr.length - 1); x > -1; x--)
        {
            //console.log(someStr[x]);
            newStr += someStr[x];
            //console.log(newStr);
        }

        return newStr;
    }

    return '"Uh Oh! You inputed something invalid"';
}

console.log(`Hello reversed is ${reverseStr('Hello')}\n`);
console.log(`World reversed is ${reverseStr('World')}\n`);
console.log(`123456789 reversed is ${reverseStr(123456789)}\n`);
console.log(`[2,3,2,3] reversed is ${reverseStr([2,3,2,3])}\n`);
console.log(`null reversed is ${reverseStr(null)}\n`);
console.log(`NaN reversed is ${reverseStr(NaN)}\n`);
console.log(`undefined reversed is ${reverseStr(undefined)}\n`);
console.log(`SpAcEs a  n  d       Caps reversed is ${reverseStr('SpAcEs a  n  d       Caps')}\n`);