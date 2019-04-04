/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) 
{
    if (!isNaN(someStr))
    {
        if(someStr !== null) 
            someStr = someStr.toString(); 
    }
    if (typeof(someStr) == typeof(''))
    {
        let pali = false;
        someStr = someStr.toLowerCase();
        someStr = someStr.replace(/\s/g,'');
        for (let x = 0; x < (someStr.length / 2); x++)
        {
            let temp1 = someStr[x];
            let temp2 = someStr[someStr.length - (x + 1)];

        // console.log(`${temp1} and ${temp2}`);
            
            if (temp1 === temp2)
            {
                pali = true;
            }
            else
                return false;
        }

        return pali;
    }

    return '"Uh Oh! You inputed something invalid"';
}

console.log(`Racecar palindrome test returns ${isPalindrome('RaCEcAr')}\n`);
console.log(`[1,2,1] palindrome test returns ${isPalindrome([1,2,1])}\n`);
console.log(`undefined palindrome test returns ${isPalindrome(undefined)}\n`);
console.log(`Hello olleh palindrome test returns ${isPalindrome('Hello olleh')}\n`);
console.log(`5005 palindrome test returns ${isPalindrome(5005)}\n`);
console.log(`Re,,,,,,D     RuM Sir            Is mUrdEr palindrome test returns ${isPalindrome('ReD     RuM Sir            Is mUrdEr')}\n`)