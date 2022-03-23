# Learning JavaScript

I will follow online tutorials to learn all about JavaScript. I will use this README as a way to take notes. 

Credits to: [FreeCodeAcademy](https://youtu.be/PkZNo7MFNFg)

## Running JavaScript
All web browsers are able to run JavaScript, so you don't even need to download anything to run it.

You can make a HTML file with the script tags to write JavaScript in it.

## Comments in JavaScript
// -> inline comment 

/* */ -> multiline comment  


## Data Types and Variables
- undefined- you haven't set it to be anything yet
- null- you set it to something but it's nothing
- boolean
- string
- symbol-immutable, primitive value that's unique
- number
- object- store key value pairs

There are three keywords to declare variables 
- `var myName = "Beau"`
  - `myName = 8`
  - var keyword allows the variable to be used through the whole code
  - it's mutable
- `let ourName = "epic" `
  - let only allow you to use it in a certain scope
- `const pi = 3.14`
  - Immutable variable

## Declaring Values and Variables with Assignment Operator
It is conventional to put a semicolon to indicate end of a line, but technically not necessary. 
- `var a;`
- `var b = 2;`

The `=` sign is an assignment operator, and assigns the value on the right to the variable to the left.

`console.log` is bascially a print statement. 

`var a` will initialize the variable `a` if it's not initialized beforehand, but it is not assigned, so their values are undefined.

## Naming Variables
Variable names are also case sensitive, like many other languages.

It's conventional to use camelCase, unlike snake_case in Ocaml.

## Arithmetic With Numbers
- `var sum = 10 + 10;`
- `var difference = 45 -10`
- `var product = 8 * 10 `
- `var quotient = 66 / 33`

## Increment / Decrement Numbers
- `myVar = myVar - 1;`
Same as `myVar--` or `myVar++` for addition

## Multiplying deciamls 
- Similarly, it is pretty much the same `var product = 2.0 * 2.5`
  - This is decimal multiplcation
- `var quotient = 4.4 / 2.0`
- `var remainder = 11 % 3`

## Compound Assignment
- `a = a + 3` to assign values compoundly
- `a += 9`
- `b -= 6` 
- Same for multiplication and divison: `*=` and `\=`

## String variables 
- `var name = Hello`
- There are of course also escape characters
  - `var string = "I am a \"double quoted\" string."` 
  - Another way to do this is to have it start with single quotes, and then using double quotes inside of it 
  - You can also use backticks \`string\` to escape it
  - A list of things you can escape out: \', \", \\, \n, \r (carriage return), \t (tab), \b (backspace), \f (form feed)

## Concatenate Strings
- You can concatenate strings with a plus sign
- You can concatenate strings with plus equals
- `var myName = "My name is " + nameVariable + "."`
- You can also add together variables 
  - `var someAdj = "worthwhile"`
  - `var sentence = "This is "`
  - `sentence += worthwhile`

## Length of a string
- `var firstName = "Hello"`
- `firstNameLength = firstName.length`

## Getting specific index of a string
- You want to use the bracket notation
- `firstLetter = firstName[0]`
- Get last letter with `letter = firstName[firstName.length - 1]`

## String immutability
- Strings are immutable, or rather you can't change individual letters
  - `var sent = "Jello World"`
  - `sent[0] = 'H'`
  - This will not work

## Arrays 
- Similar to arrays in other languages 
  - `var myArray = ["John", 23]`
  - Every element is separated by a comman, can be any data type
- Nested arrays
  - `var ourArray = [["the university"],["keep going!"]]`
- Access them with square brackets
- You can modify them with square brackets as well
  - `var myArray = [1,2,3]`
  - `myArray[0] = 10`
  - `myArray` becomes `[10,2,3]`
- You can use `[1][2]` to access nested arrays
- Manipulate arrays with `push` function
  - `ourArray.push([1])`
  - Pushes the element to the end of array that calls push
- Manipulate arrays with `pop` function
  - `ourArray.pop()`
  - Pops the last element of the array that calls it
- Manipulate arrays with `shift` function
  - `ourArray.shift()`
  - Pops the first element of the array that calls it
- Manipulate arrays with `unshift` function
  - `ourArray.unshift("element")`
  - Pushes the element to the beginning of array that calls unshift

## Scope and Functions
- Visibility of Variables
- Global - variables defined outside of a function block
- You can also have global and local variables
  - When you do this, the local variable takes precedence
- Return values from functions with the `return` keyword
- If you don't have any specifier, then it is just a void function

## Boolean Values
- `true` and `false`
- Can be used in function returns

## Comparison operators
- `==` for equality
  - Not the single equality sign, because that's the assingment operator.
- Strict equality sign
  - `===`
  - Difference is that it doesn't do type conversion
    - `3 === 3` is true
    - `3 === '3'` is false
  - Not equal: `!=`
  - Strict inequality
    - `!==`, also doesn't do type conversion
  - Greater than operator
    - `>`
  - Greater than or equal to
    - `>=`
  - Same thing for less than and less than or equal to
- Logical and operator
  - `val <= 50 && val >= 25`
  - `&&` is the operator in JavaScript
- Logical or operator
  - `val < 10 || val > 20`
  - `||` is the operator

## If statements
- Order is very important
- It will go into different branches because it evaluates from the top to bottom
- You can also chain if else statements

## Switch statements
- See example code for it
- Sometimes it's easier to understand and write than a chain of if else statements
- Kind of like pattern matching

## Object in JavaScript
- Really similar to Ocaml
- Similar to arrays but instead of indicies, you use properties.
- `var ourDog = {"name": "Camper", "legs" : 4, friends: []}`
- Dot notation to access properties
  - ourDog.name
- You can also use bracket notation
  - Necessary if the property has a space
  - `testObj["an entree"]`
  - You can use a variable inside the bracket notation to access it as well
- Updating object properties
  - `ourDog.name = "Happy Camper"`
- Adding new properties to an existing object
  - `ourDog.bark = "Yes"`
  - This will create a new property called bark
  - `ourDog["bark"] = "No"`
- Deleting a property
  - Use `delete` keyword
  - `delete ourDog.bark`
- Objects can be thought of as a key value storage, so you can use objects to look up values using `switch` statements
  - Property name is the key, and property value is the value
- Check if an object has a property or not
  - Use the `hasOwnProperty` function
  - `myObj.hasOwnProperty(property)` returns true of false if it has the property
- List of objects is very similar to JSONs
- Accessing nested objects
  - Chain dot notation
  - `myStorage.car.inside`
- Accessing nested arrays
  - `myPlants[1].list[1]`

## While loops
- Similar to that in Java
- `while (i<5)`

# For loops
- `for (var i = 0; i < 5; i++) {}`
- Pretty much the same thing as Java, except the constructor is not specific to any types
- Incrementing by different amounts
  - `for (var i = 0; i < 5; i += 2) {}`
- Counting backwards
  - `for (var i = 10, i > 0; i -= 2) {}`
- Iterating through the array
  - `for (var i = 0, i < ourArr.length; i++) {}`
- You can also nest for loops, just like Java and other languages 
  - `for (var i = 0; i < arr.length; i++)`
    - `for (var j = 0; j < arr[i].length; j++)`




Checkpoint: [YouTube Link](https://youtu.be/PkZNo7MFNFg?t=8554)