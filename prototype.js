// Prototypes in js has been discussed...

// Prototypes are used when a programmer needs to add new properties, such as variables and methods, later. Prototypes dynamically add variables to an existing object

// let's say I want to add a new method to String Object to check if it is palindrome or not
// NOTE : do not use arrow function as they do not have access to 'this'
String.prototype.checkPalindrome = function(){
    
    let x = this ;

    for(i = 0 ; i < this.length; i++)
    {
        if(x[i] != x[this.length-i-1])
        return false ;
    }

    return true ;

}

//################ UNCOMMENT BELOW THING ####################:
// let word = "rabbar";
// console.log(word.checkPalindrome());


// IN THIS WAY U CAN INJECT NEW METHODS INTO EXISTING OBJECTS, ARRAYS, STRINGS
// Now let's see how to create instances of an object using a constructor :

function car(name, speed)
{
    this.name = name 
    this.speed = speed
}

let car1 = new car("WagonR", 150)
let car2 = new car("Lambhorgini", 250)

// you can see that car1 and car2 are now two objects whose value has been 
// intialized using constructor car 
// console.log(car1,typeof(car1));
// console.log(car2,typeof(car2));

// Let's now inject a new method to these objects :
car.prototype.printStats = function()
{
    console.log(`Car name : ${this.name}`);
    console.log(`Car speed : ${this.speed}`);
}


console.log(car1.printStats());
console.log(car2.printStats());




