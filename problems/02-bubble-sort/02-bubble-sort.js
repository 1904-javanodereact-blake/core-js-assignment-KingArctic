/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

let numbers1 = [7,1,6,2,9,8,6,5,4,3,8,2,6,4,7,'Hello',8];
let numbers2 = [5,6,3,2,6,4,2,6,3,2,4];
let numbers3 = [6,3,8,5,2,5,7,4,2,6,8,4,2,1,5,7,4,4,5,4,3,6,8,4,3,6,9,5,3,6];
let numbers4 = [undefined,4,2,2,5,2,4,NaN];
let numbers5 = [];
let temp = [5,7,null,9,1];

function bubbleSort(numArray) 
{
    let valid = true;

    console.log(numArray)

    for (let checker = 0; checker < numArray.length; checker++)
    {
        if (isNaN(numArray[checker]))
        {
            console.log(`Current array is not valid!`);
            valid = false;
            break;
        }
    }
    let sorted = false;
    let iteration = 0;
    if(valid)
    {
        while(!sorted)
        {
            sorted = true;
            //console.log(numArray)
            for (let x = 0; x < (numArray.length - iteration); x++)
            {
                if ((x + 1) == numArray.length)
                {
                    continue;
                }
                if(numArray[x] > numArray[x + 1])
                {
                    //console.log(`${numArray[x]} and ${numArray[x + 1]}`);
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

    return numArray;
}

bubbleSort(numbers1);
bubbleSort(numbers2);
bubbleSort(numbers3);
bubbleSort(numbers4);
bubbleSort(numbers5);