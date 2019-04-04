/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let computer = 
{
    CPU: 'Ryzen 2700X', 
    MOBO: 'ROG Stix', 
    GPU: 'RTX 2070', 
    Weight: 50
}

function Car(make, model, color, engine, topSpeed)
{
    this.make = make;
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.topSpeed = topSpeed;
}

class Gun
{
    constructor(make, model, color, bullet, blastPower)
    {
        this.make = make;
        this.model = model;
        this.color = color;
        this.bullet = bullet;
        this.blastPower = blastPower;
    }

    getName(){ return this.name; }
    getName(){ return this.name; }
    getName(){ return this.name; }
    getName(){ return this.name; }
    getName(){ return this.name; }
    setName(newMake){ this.make = make; }
    setName(newModel){ this.model = model; }
    setName(newColor){ this.color = color; }
    setName(newBullet){ this.bullet = bullet; }
    setName(newBlastPower){ this.blastPower = blastPower; }
}

let ruby = new Car('Ford', 'Mustange', 'Red', 'V6', 120);
let deagle = new Gun('Magnum Research', 'Desert Eagle', 'Titanium', .50, 470);

console.log(ruby);
console.log(computer);
console.log(deagle);