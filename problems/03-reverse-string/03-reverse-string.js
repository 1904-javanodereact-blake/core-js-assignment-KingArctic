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

console.log(`Hello reversed is ${reverseStr('Hello')}`);
console.log(`World reversed is ${reverseStr('World')}`);
console.log(`123456789 reversed is ${reverseStr(123456789)}`);
console.log(`[2,3,2,3] reversed is ${reverseStr([2,3,2,3])}`);
console.log(`null reversed is ${reverseStr(null)}`);
console.log(`NaN reversed is ${reverseStr(NaN)}`);
console.log(`undefined reversed is ${reverseStr(undefined)}`);
console.log(`SpAcEs a  n  d       Caps reversed is ${reverseStr('SpAcEs a  n  d       Caps')}`);