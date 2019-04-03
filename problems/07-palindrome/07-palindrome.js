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

    return false
}

console.log(`Racecar palindrome test returns ${isPalindrome('RaCEcAr')}`);
console.log(`[1,2,1] palindrome test returns ${isPalindrome([1,2,1])}`);
console.log(`undefined palindrome test returns ${isPalindrome(undefined)}`);
console.log(`Hello olleh palindrome test returns ${isPalindrome('Hello olleh')}`);
console.log(`5005 palindrome test returns ${isPalindrome(5005)}`);
console.log(`Re,,,,,,D     RuM Sir            Is mUrdEr palindrome test returns ${isPalindrome('ReD     RuM Sir            Is mUrdEr')}`)