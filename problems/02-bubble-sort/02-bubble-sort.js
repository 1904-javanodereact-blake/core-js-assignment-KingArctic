/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

let numbers = [7,1,6,2,9,4,6,5,4,3,8,2,6,4,7,3,8];
let temp = [7,1];

function bubbleSort(numArray) 
{
    let sorted = false;
    let iteration = 0;
    while(!sorted)
    {
        sorted = true;
        console.log(numArray)
        for (let x = 0; x < (numArray.length - iteration); x++)
        {
            if ((x + 1) == numArray.length)
            {
                continue;
            }
            if(numArray[x] > numArray[x + 1])
            {
                console.log(`${numArray[x]} and ${numArray[x + 1]}`);
                let tempNum = numArray[x];
                numArray[x] = numArray[x + 1];
                numArray[x + 1] = tempNum;
                sorted = false;
                continue;
            }
        }
        iteration += 1;
    }
}

bubbleSort(numbers);