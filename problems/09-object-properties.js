/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
let computer = 
{
    CPU: 'Ryzen 2700X', 
    MOBO: 'ROG Stix', 
    GPU: 'RTX 2070', 
    Weight: 50
}

function objectProperties(someObj) 
{
    for(let objProp in someObj)
    {
        console.log(`Property: ${objProp}
        Value: ${someObj[objProp]}`);
    }
}

objectProperties(computer);