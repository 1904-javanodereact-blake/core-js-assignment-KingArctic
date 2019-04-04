// . Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character) 
{
  switch (shape) 
  {
    case "Square":
    {
      let tempString = '';
      for (let y = 0; y < height; y++)
        {
          for (let x = 0; x < height; x++)
          {
            tempString += character;
          }
          tempString += '\n';
        }
        console.log(tempString);
      break;
    }
    case "Triangle":
    {
      let tempString = '';
      for (let y = 0; y < height; y++)
        {
          for (let x = 0; x < (y + 1); x++)
          {
            tempString += character;
          }
          tempString += '\n';
        }
        console.log(tempString);
      break;
    }
    case "Diamond":
    {
      let tempString = '';
      for (let y = 0; y < height; y++)
      {
        for (let x = 0; x < height; x++)
        {
          if (y < Math.floor(height / 2))
          {
          //#region Top
            if (x === Math.floor(height / 2))
            {
              tempString += character;
             }     
            else if (x < Math.floor(height / 2) && x >= (Math.floor(height / 2) - y))
            {
             tempString += character;
            }        
            else if (x > Math.floor(height/ 2) && x <= (Math.floor(height / 2) + y))
            {
              tempString += character;
            }
            else
            {
              for (let space = 0; space < character.length; space++)
              {
                tempString += ' ';
              }
            }
          }
          //#endregion
          //#region Middle
          else if (y === Math.floor(height / 2))
          {
            tempString += character;
          }
          //#endregion
          //#region Bottom
          else if (y > Math.floor(height / 2))
          {
            if (x === Math.floor(height / 2))
            {
              tempString += character;
            }     
            else if (x < Math.floor(height / 2) && x >= (y - Math.floor(height / 2)))
            {
             tempString += character;
            }        
            else if (x > Math.floor(height / 2) && x <= ((height - 1) - (y - Math.floor(height / 2))))
            {
              tempString += character;
            }
            else
            {
              for (let space = 0; space < character.length; space++)
              {
                tempString += ' ';
              }
            }
          }
          //#endregion
        }
        tempString += '\n';
      }
      console.log(tempString);
      break;
    }
    default:
    {
      console.log(`Uh Oh! You entered an invalid shape.`);
      break;
    }
  }
}

printShape("Square", 5, 'BLAH');
printShape("Triangle", 5, ' ~ ');
printShape("Diamond", 5, ' o ')