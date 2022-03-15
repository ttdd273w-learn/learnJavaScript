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

Checkpoint: [YouTube Link](https://youtu.be/PkZNo7MFNFg?t=2449)