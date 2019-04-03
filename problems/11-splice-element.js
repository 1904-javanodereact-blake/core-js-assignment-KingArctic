/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
let nums = [0,1,2,3,4,5,6,7,8,9];

function spliceElement(someArr, index) 
{
    someArr.splice(index, 1);
    return someArr;
}

console.log(spliceElement(nums, 3));
