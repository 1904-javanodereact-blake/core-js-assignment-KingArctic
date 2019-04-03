/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) 
{
    if (typeof(someStr) !== typeof(''))
    
    let pali = false;
    someStr = someStr.toString();
    someStr = someStr.toLowerCase();
    someStr = someStr.replace(/\s/g,'');
    
    console.log(someStr);
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

console.log(`Racecar palindrome test returns ${isPalindrome('RaCEcAr')}`);
console.log(`Fox palindrome test returns ${isPalindrome('Fox')}`);
console.log(`undefined palindrome test returns ${isPalindrome(undefined)}`);
console.log(`Hello olleh palindrome test returns ${isPalindrome('Hello olleh')}`);
console.log(`5005 palindrome test returns ${isPalindrome(5005)}`);