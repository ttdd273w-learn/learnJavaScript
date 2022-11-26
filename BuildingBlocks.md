# JavaScript building blocks

- In this module, we continue our coverage of all JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events. You've seen this stuff already in the course, but only in passing — here we'll discuss it all explicitly.

# Making decisions in your code — conditionals

- In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is nighttime. In this article, we'll explore how so-called conditional statements work in JavaScript.

## You can have it on one condition!

- Human beings (and other animals) make decisions all the time that affect their lives, from small ("should I eat one cookie or two?") to large ("should I stay in my home country and work on my father's farm, or should I move to America and study astrophysics?")

- Conditional statements allow us to represent such decision making in JavaScript, from the choice that must be made (for example, "one cookie or two"), to the resulting outcome of those choices (perhaps the outcome of "ate one cookie" might be "still felt hungry", and the outcome of "ate two cookies" might be "felt full, but mom scolded me for eating all the cookies".)

## if...else statements

- Probably one of the most common conditionals

### Basic if...else syntax

- Basic `if...else` syntax looks like this:

```
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

- This code is pretty human-readable — it is saying "if the condition returns `true`, run code A, else run code B"

- You should note that you don't have to include the else and the second curly brace block — the following is also perfectly legal code:

```
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

- As a final point, while not recommended, you may sometimes see if...else statements written without the curly braces:

```
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

- This syntax is perfectly valid, but it is much easier to understand the code if you use the curly braces to delimit the blocks of code, and use multiple lines and indentation.

### A real example

- To understand this syntax better, let's consider a real example. Imagine a child being asked for help with a chore by their mother or father. The parent might say "Hey sweetheart! If you help me by going and doing the shopping, I'll give you some extra allowance so you can afford that toy you wanted." In JavaScript, we could represent this like so:

```
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### else if

- The last example provided us with two choices, or outcomes — but what if we want more than two?

- There is a way to chain on extra choices/outcomes to your `if...else` — using `else if`. Each extra choice requires an additional block to put in between `if () { }` and `else { }` — check out the following more involved example, which could be part of a simple weather forecast application:

```
<label for="weather">select the weather type today: </label>
<select id="weather">
  <option value="">--make a choice--</option>
  <option value="sunny">sunny</option>
  <option value="rainy">rainy</option>
  <option value="snowing">snowing</option>
  <option value="overcast">overcast</option>
</select>

<p></p>
```

```
const select = document.queryselector('select');
const para = document.queryselector('p');

select.addeventlistener('change', setweather);

function setweather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textcontent = 'it is nice and sunny outside today. wear shorts! go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textcontent = 'rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textcontent = 'the snow is coming down — it is freezing! best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textcontent = 'it isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textcontent = '';
  }
}
```

### A note on comparison operators

- Comparison operators are used to test the conditions inside our conditional statements. We first looked at comparison operators back in our basic math in Javascript — numbers and operators article. Our choices are:

- `===` and `!==` — test if one value is identical to, or not identical to, another.

- `<` and `>` — test if one value is less than or greater than another.
- `<=` and `>=` — test if one value is less than or equal to, or greater than or equal to, another.

- We wanted to make a special mention of testing boolean (`true`/`false`) values, and a common pattern you'll come across again and again.
- Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is `true`, or even that it exists (that is, it is not `undefined`.) So for example:

```
let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
```

### Nesting if...else

- It is perfectly OK to put one `if...else` statement inside another one — to nest them. For example, we could update our weather forecast application to show a further set of choices depending on what the temperature is:

```
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

- Even though the code all works together, each `if...else` statement works completely independently of the other one.

### Logical operators: AND, OR and NOT

- If you want to test multiple conditions without writing nested `if...else` statements, logical operators can help you. When used in conditions, the first two do the following:

- `&&` — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to `true` for the whole expression to return `true`.
- `||` — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to `true` for the whole expression to return `true`.
- The last type of logical operator, NOT, expressed by the `!` operator, can be used to negate an expression.

## switch statements

- `if...else` statements do the job of enabling conditional code well, but they are not without their downsides.
- They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators).
- For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

- In such a case, `switch` statements are your friend — they take a single expression/value as an input, and then look through several choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

1. The keyword `switch`, followed by a set of parentheses.
2. An expression or value inside the parentheses.
3. The keyword `case`, followed by a choice that the expression/value could be, followed by a colon.
4. Some code to run if the choice matches the expression.
5. A `break` statement, followed by a semicolon. If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.
6. As many other cases (bullets 3–5) as you like.
7. The keyword `default`, followed by exactly the same code pattern as one of the cases (bullets 3–5), except that `default` does not have a choice after it, and you don't need the `break` statement as there is nothing to run after this in the block anyway. This is the default option that runs if none of the choices match.

- **Note**: You don't have to include the default section — you can safely omit it if there is no chance that the expression could end up equaling an unknown value. If there is a chance of this, however, you need to include it to handle unknown cases.

## Ternary operator

- The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is `true`, and another if it is `false` — this can be useful in some situations, and can take up a lot less code than an `if...else` block if you have two choices that are chosen between via a `true`/`false` condition. The pseudocode looks like this:

```
condition ? run this code : run this code instead
```

- As a simple example:

```
const greeting = isBirthday
  ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
  : 'Good morning Mrs. Smith.';
```

### Ternary operator example

- The ternary operator is not just for setting variable values; you can also run functions, or lines of code — anything you like. The following live example shows a simple theme chooser where the styling for the site is applied using a ternary operator.

```
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);
```

# Looping code

- Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations to just about any other situation where you've got a lot of similar items of work to complete. Here we'll look at the loop structures available in JavaScript that handle such needs.

## Why are loops useful?

- Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop, or the same code will run but with different variables.

### Looping code example

- Suppose we want to draw 100 random circles on a canvas page

```
Suppose we wanted to draw 100 random circles on a <canvas> element (press the Update button to run the example again and again to see different random sets):


Here's the JavaScript code that implements this example:

const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
})

function random(number) {
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

btn.addEventListener('click',draw);
```

### With and without a loop

- You don't have to understand all the code for now, but let's look at the part of the code that actually draws the 100 circles:

```
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

## Looping through a collection

- Most of the time when you use a loop, you will have a collection of items and want to do something with every item.

- One type of collection is the `Array`, which we met in the Arrays chapter of this course. But there are other collections in JavaScript as well, including `Set` and `Map`.

## The for..of loop

- The basic tool for looping through a collection is the `for...of` loop:

```
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}
```

- In this example, `for (const cat of cats)` says:

1. Given the collection `cats`, get the first item in the collection.
2. Assign it to the variable `cat` and then run the code between the curly brackets `{}`.
3. Get the next item, and repeat (2) until you've reached the end of the collection.

## map() and filter()

- JavaScript also has more specialized loops for collections, and we'll mention two of them here.

- You can use `map()` to do something to each item in a collection and create a new collection containing the changed items:

```
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

- You can use `filter()` to test each item in a collection, and create a new collection containing only items that match:

```
function lCat(cat) {
  return cat.startsWith('L');
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

- This looks a lot like `map()`, except the function we pass in returns a boolean: if it returns `true`, then the item is included in the new array. Our function tests that the item starts with the letter "L", so the result is an array containing only cats whose names start with "L":

```
[ "Leopard", "Lion" ]
```

- Note that `map()` and `filter()` are both often used with function expressions, which we will learn about in the Functions module. Using function expressions we could rewrite the example above to be much more compact:

```
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

### The standard for loop

- In the "drawing circles" example above, you don't have a collection of items to loop through: you really just want to run the same code 100 times. In a case like that, you should use the for loop. This has the following syntax:

```
for (initializer; condition; final-expression) {
  // code to run
}
```

- This works just fine, and in early versions of JavaScript, `for...of` didn't exist, so this was the standard way to iterate through an array. However, it offers more chances to introduce bugs into your code. For example:
  - you might start `i` at `1`, forgetting that the first array index is zero, not 1.
  - you might stop at `i <= cats.length`, forgetting that the last array index is at `length - 1`.

## Exiting loops with break

- If you want to exit a loop before all the iterations have been completed, you can use the break statement. We already met this in the previous article when we looked at switch statements — when a case is met in a switch statement that matches the input expression, the `break` statement immediately exits the switch statement and moves on to the code after it.

- It's the same with loops — a break statement will immediately exit the loop and make the browser move on to any code that follows it.

## Skipping iterations with continue

- The continue statement works similarly to `break`, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.

## while and do...while

- `for` is not the only type of loop available in JavaScript. There are actually many others and, while you don't need to understand all of these now, it is worth having a look at the structure of a couple of others so that you can recognize the same features at work in a slightly different way.

- First, let's have a look at the while loop. This loop's syntax looks like so:

```
initializer
while (condition) {
  // code to run

  final-expression
}
```

- This works in a very similar way to the `for` loop, except that the initializer variable is set before the loop, and the final-expression is included inside the loop after the code to run, rather than these two items being included inside the parentheses. The condition is included inside the parentheses, which are preceded by the `while` keyword rather than `for`.

- The same three items are still present, and they are still defined in the same order as they are in the for loop. This is because you must have an initializer defined before you can check whether or not the condition is true. The final-expression is then run after the code inside the loop has run (an iteration has been completed), which will only happen if the condition is still `true`.

- The `do...while` loop is very similar, but provides a variation on the while structure:

```
initializer
do {
  // code to run

  final-expression
} while (condition)
```

- In this case, the initializer again comes first, before the loop starts. The keyword directly precedes the curly braces containing the code to run and the final expression.

- The main difference between a `do...while` loop and a `while` loop is that the code inside a `do...while` loop is always executed at least once.
- That's because the condition comes after the code inside the loop. So we always run that code, then check to see if we need to run it again. In `while` and `for` loops, the check comes first, so the code might never be executed.

- **Warning**: With while and do...while — as with all loops — you must make sure that the initializer is incremented or, depending on the case, decremented, so the condition eventually becomes false. If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an **infinite loop**.

## Which loop type should you use?

- If you're iterating through an array or some other object that supports it, and don't need access to the index position of each item, then `for...of` is the best choice. It's easier to read and there's less to go wrong.

- For other uses, `for`, `while`, and `do...while` loops are largely interchangeable.
- They can all be used to solve the same problems, and which one you use will largely depend on your personal preference — which one you find easiest to remember or most intuitive.
- We would recommend `for`, at least to begin with, as it is probably the easiest for remembering everything — the initializer, condition, and final-expression all have to go neatly into the parentheses, so it is easy to see where they are and check that you aren't missing them.

# Functions — reusable blocks of code

- Another essential concept in coding is **functions**, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times. In this article we'll explore fundamental concepts behind functions such as basic syntax, how to invoke and define them, scope, and parameters.

## Where do I find functions?

- In JavaScript, you'll find functions everywhere. In fact, we've been using functions all the way through the course so far; we've just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

- Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — `()` — and you're **not** using a common built-in language structure like a for loop, while or do...while loop, or if...else statement, you are making use of a function.

## Built-in browser functions

- We've used functions built in to the browser a lot in this course.

- Every time we manipulated a text string, for example:

```
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

- Or every time we manipulated an array:

```
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

- Or every time we generate a random number:

```
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

- We were using a _function_!

- The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself. In fact, some of the code you are calling when you **invoke** (a fancy word for run, or execute) a built in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

- Bear in mind that some built-in browser functions are not part of the core JavaScript language — some are defined as part of browser APIs, which build on top of the default language to provide even more functionality (refer to this early section of our course for more descriptions). We'll look at using browser APIs in more detail in a later module.

## Functions versus methods

- **Functions** that are part of objects are called **methods**.
- You don't need to learn about the inner workings of structured JavaScript objects yet — you can wait until our later module that will teach you all about the inner workings of objects, and how to create your own.
- For now, we just wanted to clear up any possible confusion of method versus function — you are likely to meet both terms as you look at the available related resources across the Web.

- The built-in code we've made use of so far come in both forms: **functions** and **methods**.
- You can check the full list of the built-in functions, as well as the built-in objects and their corresponding methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

- You've also seen a lot of **custom functions** in the course so far — functions defined in your code, not inside the browser.
- Anytime you saw a custom name with parentheses straight after it, you were using a custom function.

## Invoking functions

- You are probably clear on this by now, but just in case, to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.

```
function myFunction() {
  alert('hello');
}

myFunction();
// calls the function once
```

- **Note**: This form of creating a function is also known as function declaration. It is always hoisted, so you can call function above function definition and it will work fine.

## Function parameters

- Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.

- **Note**: Parameters are sometimes called arguments, properties, or even attributes.

### Optional parameters

- Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array join() function's parameter is optional:

```
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

- If no parameter is included to specify a joining/delimiting character, a comma is used by default.

### Default parameters

- If you're writing a function and want to support optional parameters, you can specify default values by adding `=` after the name of the parameter, followed by the default value:

```
function hello(name = 'Chris') {
  console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello();      // Hello Chris!
```

## Anonymous functions and arrow functions

- So far we have just created a function like so:

```
function myFunction() {
  alert('hello');
}
```

- But you can also create a function that doesn't have a name:

```
(function () {
  alert('hello');
})
```

- This is called an **anonymous function**, because it has no name.
- You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.

- **Note**: This form of creating a function is also known as _function expression_. Unlike function declaration, function expressions are not hoisted.

### Anonymous function example

- For example, let's say you want to run some code when the user types into a text box.
- To do this you can call the `addEventListener()` function of the text box. This function expects you to pass it (at least) two parameters:
  - the name of the event to listen for, which in this case is `keydown`
  - a function to run when the event happens.
- When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed:

```
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);
```

- Instead of defining a separate `logKey()` function, you can pass an anonymous function into `addEventListener()`:

```
textBox.addEventListener('keydown', function(event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Arrow functions

- If you pass an anonymous function like this, there's an alternative form you can use, called an **arrow function**. Instead of `function(event)`, you write `(event) =>`:

```
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

- If the function only has one line in the curly brackets, you omit the curly brackets:

```
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));
```

- If the function only takes one parameter, you can also omit the brackets around the parameter:

```
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
```

- Finally, if your function needs to return a value, and contains only one line, you can also omit the `return` statement.
- In the following example we're using the `map()` method of `Array` to double every value in the original array:

```
const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]
```

- The `map()` method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.

- So in the example above, `(item) => item * 2` is the arrow function equivalent of:

```
function doubleItem(item) {
  return item * 2;
}
```

## Function scope and conflicts

- Let's talk a bit about scope — a very important concept when dealing with functions.
- When you create a function, the variables and other things defined inside the function are inside their own separate **scope**, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

- The top level outside all your functions is called the **global scope**.
- Values defined in the global scope are accessible from everywhere in the code.

- JavaScript is set up like this for various reasons — but mainly because of security and organization.
- Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts.
- This might be done maliciously, or just by accident.

- For example, say you have an HTML file that is calling in two external JavaScript files, and both of them have a variable and a function defined that use the same name:

```
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```
// first.js
const name = 'Chris';
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}
```

```
// second.js
const name = 'Zaptec';
function greeting() {
  alert(`Our company is called ${name}.`);
}
```

- Both functions you want to call are called `greeting()`, but you can only ever access the `first.js` file's `greeting()` function (the second one is ignored).
- In addition, an error results when attempting (in the `second.js` file) to assign a new value to the name variable — because it was already declared with const, and so can't be reassigned.

- Keeping parts of your code locked away in functions avoids such problems, and is considered the best practice.

- It is a bit like a zoo.
- The lions, zebras, tigers, and penguins are kept in their own enclosures, and only have access to the things inside their enclosures — in the same manner as the function scopes.
- If they were able to get into other enclosures, problems would occur. At best, different animals would feel really uncomfortable inside unfamiliar habitats — a lion or tiger would feel terrible inside the penguins' watery, icy domain. At worst, the lions and tigers might try to eat the penguins!

# Build your own function

- With most of the essential theory dealt with in the previous article, this article provides practical experience. Here you will get some practice building your own, custom function. Along the way, we'll also explain some useful details of dealing with functions.

## Active learning: Let's build a function

- The custom function we are going to build will be called `displayMessage()`.
- It will display a custom message box on a web page and will act as a customized replacement for a browser's built-in `alert()` function.
- We've seen this before, but let's just refresh our memories. Type the following in your browser's JavaScript console, on any page you like:

```
alert('This is a message');
```

- The `alert` function takes a single argument — the string that is displayed in the alert box. Try varying the string to change the message.

- The `alert` function is limited: you can alter the message, but you can't easily vary anything else, such as the color, icon, or anything else. We'll build one that will prove to be more fun.

## The basic function

- To begin with, let's put together a basic function.

```
const body = document.body;

const panel = document.createElement('div');
panel.setAttribute('class','msgBox');
body.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));
```

- Is a function that uses the DOM API to get the `body` property of the global `document` object.

- The next section uses a DOM API function called `document.createElement()` to create a `<div>` element and store a reference to it in a constant called panel.
- This element will be the outer container of our message box.

- We then use yet another DOM API function called `Element.setAttribute()` to set a class attribute on our panel with a value of `msgBox`.
- This is to make it easier to style the element — if you look at the CSS on the page, you'll see that we are using a `.msgBox` class selector to style the message box and its contents.

- Finally, we call a DOM function called `Node.appendChild()` on the body constant we stored earlier, which nests one element inside the other as a child of it.
- We specify the panel `<div>` as the child we want to append inside the `<body>` element.
- We need to do this as the element we created won't just appear on the page on its own — we need to specify where to put it.

- The next two sections make use of the same `createElement()` and `appendChild()` functions we've already seen to create two new elements — a `<p>` and a `<button>` — and insert them in the page as children of the panel `<div>`.
- We use their `Node.textContent` property — which represents the text content of an element — to insert a message inside the paragraph, and an "x" inside the button.
- This button will be what needs to be clicked/activated when the user wants to close the message box.

- Briefly, the `addEventListener()` method is provided by the button (or in fact, any element on the page) that can be passed a function and the name of an event.
- In this case, the name of the event is 'click', meaning that when the user clicks the button, the function will run.
- You'll learn a lot more about events in our events article.
- The line inside the function uses the `Node.removeChild()` DOM API function to specify that we want to remove a specific child element of the HTML element — in this case, the panel `<div>`.

# Function return values

- There's one last essential concept about functions for us to discuss — return values. Some functions don't return a significant value, but others do. It's important to understand what their values are, how to use them in your code, and how to make functions return useful values. We'll cover all of these below.

## What are return values?

- **Return values** are just what they sound like — the values that a function returns when it completes. You've already met return values several times, although you may not have thought about them explicitly.

- Let's take a look at an example:

```
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

- The `replace()` function is invoked on the `myText` string, and is passed two parameters:

  1. the substring to find ('cold').
  2. the string to replace it with ('warm').

- When the function completes (finishes running), it returns a value, which is a new string with the replacement made. In the code above, the result of this return value is saved in the variable `newString`.

- If you look at the `replace()` function MDN reference page, you'll see a section called return value.
- It is very useful to know and understand what values are returned by functions, so we try to include this information wherever possible.

- Some functions don't return any value. (In these cases, our reference pages list the return value as `void` or `undefined`.) For example, in the `displayMessage()` function we built in the previous article, no specific value is returned when the function is invoked. It just makes a box appear somewhere on the screen — that's it!

- Generally, a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values that need to be calculated by a function. After the function calculates the value, it can return the result so it can be stored in a variable; and you can use this variable in the next stage of the calculation.

## Using return values in your own functions

- To return a value from a custom function, you need to use the return keyword. We saw this in action recently in our `random-canvas-circles.html` example. Our `draw()` function draws 100 random circles somewhere on an HTML `<canvas>`:

```
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

- Inside each loop iteration, three calls are made to the `random()` function, to generate a random value for the current circle's x-coordinate, y-coordinate, and radius, respectively. The `random()` function takes one parameter — a whole number — and returns a whole random number between 0 and that number. It looks like this:

```
function random(number) {
  return Math.floor(Math.random() * number);
}
```

- This could be written as follows:

```
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

- But the first version is quicker to write, and more compact.

# Introduction to events

- **Events** are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.

- For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.

## A series of fortunate events

- As mentioned above, **events** are actions or occurrences that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. For example, in an airport, when the runway is clear for take off, a signal is communicated to the pilot. As a result, the plane can safely take off.

- In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

- For example:

  - The user selects, clicks, or hovers the cursor over a certain element.
  - The user chooses a key on the keyboard.
  - The user resizes or closes the browser window.
  - A web page finishes loading.
  - A form is submitted.
  - A video is played, paused, or ends.
  - An error occurs.

- There are **a lot** of events that can be fired.

- To react to an event, you attach an **event handler** to it.
- This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires.
- When such a block of code is defined to run in response to an event, we say we are **registering an event handler**.
- Note: Event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together.
- The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

- Note: Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.

### A simple example

- Let's look at a simple example of what we mean here.
- In the following example, we have a single `<button>`, which when pressed, makes the background change to a random color:

```
<button>Change color</button>
```

- The JavaScript looks like so:

```
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

- In this code, we store a reference to the `<button>` element inside a constant called `btn`, using the `Document.querySelector()` function.

- We also define a function that returns a random number.

- The third part of the code is where we define and register the event handler.
- The `<button>` element has an event called `'click'` that fires when the user clicks the button.
- Objects that can fire events have an `addEventListener()` method, that takes at least two arguments: the name of the event and a function to handle the event.
- So we call the button's `addEventListener()` method, passing in:
  - the string `'click'`, to indicate that we want to listen to the click event
  - a function to call when the event happens. In our case, the function generates a random RGB color and sets the page `<body>` `background-color` equal to that color.

### It's not just web pages

- Events are not unique to JavaScript — most programming languages have some kind of event model, and the way the model works often differs from JavaScript's way.
- In fact, the event model in JavaScript for web pages differs from the event model for JavaScript as it is used in other environments.

- For example, `Node.js` is a very popular JavaScript runtime that enables developers to use JavaScript to build network and server-side applications.
- The `Node.js event model` relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that different, but the code is quite different, making use of functions like `on()` to register an event listener, and `once()` to register an event listener that unregisters after it has run once.
- The HTTP connect event docs provide a good example.

- You can also use JavaScript to build cross-browser add-ons — browser functionality enhancements — using a technology called WebExtensions.
- The event model is similar to the web events model, but a bit different — event listeners' properties are camel-cased (such as `onMessage` rather than `onmessage`), and need to be combined with the `addListener` function.
- See the `runtime.onMessage` page for an example.

- You don't need to understand anything about other such environments at this stage in your learning; we just wanted to make it clear that events can differ in different programming environments.

## Using addEventListener()

- The recommended mechanism for adding event handlers in web pages is the `addEventListener()` method:

- Inside the `addEventListener()` function, we specify two parameters:
  - the name of the event we want to register this handler for
  - and the code that comprises the handler function we want to run in response to it.

### Listening for other events

- There are many different events that can be fired by a button element. Let's experiment.

- First, make a local copy of `random-color-addeventlistener.html`, and open it in your browser.
- It's just a copy of the simple random color example we've played with already.
- Now try changing `click` to the following different values in turn, and observing the results in the example:

  - `focus` and `blur` — The color changes when the button is focused and unfocused; try pressing the tab to focus on the button and press the tab again to focus away from the button.
    - These are often used to display information about filling in form fields when they are focused, or to display an error message if a form field is filled with an incorrect value.
  - `dblclick` — The color changes only when the button is double-clicked.
  - `mouseover` and `mouseout` — The color changes when the mouse pointer hovers over the button, or when the pointer moves off the button, respectively.

- Some events, such as click, are available on nearly any element. Others are more specific and only useful in certain situations: for example, the play event is only available on some elements, such as `<video>`.

### Removing listeners

- If you've added an event handler using `addEventListener()`, you can remove it again using the `removeEventListener()` method.
- For example, this would remove the `changeBackground()` event handler:

```
btn.removeEventListener('click', changeBackground);
```

- Event handlers can also be removed by passing an `AbortSignal` to `addEventListener()` and then later calling `abort()` on the controller owning the `AbortSignal`.
- For example, to add an event handler that we can remove with an `AbortSignal`:

```
const controller = new AbortController();

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal }); // pass an AbortSignal to this handler
```

- Then the event handler created by the code above can be removed like this:

```
controller.abort(); // removes any/all event handlers associated with this controller
```

- For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.

### Adding multiple listeners for a single event

- By making more than one call to `addEventListener()`, providing different handlers, you can have multiple handlers for a single event:

```
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

- Both functions would now run when the element is clicked.

## Other event listener mechanisms

- We recommend that you use `addEventListener()` to register event handlers.
- It's the most powerful method and scales best with more complex programs.
- However, there are two other ways of registering event handlers that you might see: _event handler properties_ and _inline event handlers_.

### Event handler properties

- Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event.
- For example, elements have a property `onclick`.
- This is called an _event handler_ property. To listen for the event, you can assign the handler function to the property.

- For example, we could rewrite the random-color example like this:

```
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

- You can also set the handler property to a named function:

```
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

- **With event handler properties, you can't add more than one handler for a single event.**

- This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:

```
element.onclick = function1;
element.onclick = function2;
```

### Inline event handlers — don't use these

- You might also see a pattern like this in your code:

```
<button onclick="bgChange()">Press me</button>
```

```
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

- The earliest method of registering event handlers found on the Web involved _event handler HTML attributes_ (or _inline event handlers_) like the one shown above — the attribute value is literally the JavaScript code you want to run when the event occurs.
- The above example invokes a function defined inside a `<script>` element on the same page, but you could also insert JavaScript directly inside the attribute, for example:

```
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

- You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.

- For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read.
- Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents.

- Even in a single file, inline event handlers are not a good idea.
- One button is OK, but what if you had 100 buttons?
- You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare.
- With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', bgChange);
}
```

- Finally, many common server configurations will disallow inline JavaScript, as a security measure.

- **You should never use the HTML event handler attributes** — those are outdated, and using them is bad practice.

## Event objects

- Sometimes, inside an event handler function, you'll see a parameter specified with a name such as `event`, `evt`, or `e`.
- This is called the **event object**, and it is automatically passed to event handlers to provide extra features and information.
- For example, let's rewrite our random color example again slightly:

```
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);
```

- Here you can see we are including an event object, `e`, in the function, and in the function setting a background color style on `e.target` — which is the button itself.
- The `target` property of the event object is always a reference to the element the event occurred upon.
- So, in this example, we are setting a random background color on the button, not the page.

- **Note**: You can use any name you like for the event object — you just need to choose a name that you can then use to reference it inside the event handler function.
- `e`/`evt`/`event` is most commonly used by developers because they are short and easy to remember. It's always good to be consistent — with yourself, and with others if possible.

### Extra properties of event objects

- Most event objects have a standard set of properties and methods available on the event object; see the `Event` object reference for a full list.

- Some event objects add extra properties that are relevant to that particular type of event.
- For example, the `keydown` event fires when the user presses a key.
  - Its event object is a `KeyboardEvent`, which is a specialized Event object with a key property that tells you which key was pressed:

```
<input id="textBox" type="text" />
<div id="output"></div>
```

```
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);
```

## Preventing default behavior

- Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default.
- The most common example is that of a web form, for example, a custom registration form.
- When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

- The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right.
- Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks.
- Let's look at a simple example.

- First, a simple HTML form that requires you to enter your first and last name:

```
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

- Now some JavaScript — here we implement a very simple check inside a handler for the `submit` event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty.
- If they are, we call the `preventDefault()` function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:

```
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});
```

- Obviously, this is pretty weak form validation — it wouldn't stop the user from validating the form with spaces or numbers entered into the fields, for example — but it is OK for example purposes.

## Event bubbling

- Event bubbling describes how the browser handles events targeted at nested elements.

### Setting a listener on a parent element

- Consider a web page like this:

```
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

- Here the button is inside another element, a `<div>` element.
- We say that the `<div>` element here is the **parent** of the element it contains.
- What happens if we add a click event handler to the parent, then click the button?

```
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);
```

- You get:

```
You clicked on a DIV element
```

- This makes sense: the button is inside the `<div>`, so when you click the button you're also implicitly clicking the element it is inside.

### Bubbling example

- What happens if we add event listeners to the button and the parent?

```
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

- Let's try adding click event handlers to the button, its parent (the `<div>`), and the `<body>` element that contains both of them:

```
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick);
container.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);
```

- You'll see that all three elements fire a click event when the user clicks the button:

```
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

- In this case:
  - the click on the button fires first
  - followed by the click on its parent (the `<div>` element)
  - followed by the `<div>` element's parent (the `<body>` element).
- We describe this by saying that the event **bubbles up** from the innermost element that was clicked.

- This behavior can be useful and can also cause unexpected problems. In the next sections, we'll see a problem that it causes, and find the solution.

### Video player example

- In this example our page contains a video, which is hidden initially, and a button labeled "Display video". We want the following interaction:

  - When the user clicks the "Display video" button, show the box containing the video, but don't start playing the video yet.
  - When the user clicks on the video, start playing the video.
  - When the user clicks anywhere in the box outside the video, hide the box.

- The HTML looks like this:

```
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

- It includes:
  - a `<button>` element
  - a `<div>` element which initially has a class="hidden" attribute
  - a `<video>` element nested inside the `<div>` element.
- We're using CSS to hide elements with the `hidden` class set.

- The JavaScript looks like this:

```
const btn = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btn.addEventListener('click', () => box.classList.remove('hidden'));
video.addEventListener('click', () => video.play());
box.addEventListener('click', () => box.classList.add('hidden'));
```

- This adds three `'click'` event listeners:

  - one on the `<button>`, which shows the `<div>` that contains the `<video>`
  - one on the `<video>`, which starts playing the video
  - one on the `<div>`, which hides the video

- You should see that when you click the button, the box and the video it contains are shown. But then when you click the video, the video starts to play, but the box is hidden again!

- The video is inside the `<div>` — it is part of it — so clicking the video runs both the event handlers, causing this behavior.

### Fixing the problem with stopPropagation()

- As we saw in the last section, event bubbling can sometimes create problems, but there is a way to prevent it.
- The `Event` object has a function available on it called `stopPropagation()` which, when called inside an event handler, prevents the event from bubbling up to any other elements.

- We can fix our current problem by changing the JavaScript to this:

```
const btn = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btn.addEventListener('click', () => box.classList.remove('hidden'));

video.addEventListener('click', (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener('click', () => box.classList.add('hidden'));
```

- All we're doing here is calling `stopPropagation()` on the event object in the handler for the `<video>` element's `'click'` event. This will stop that event from bubbling up to the box.

### Event capture

- An alternative form of event propagation is _event capture_.
- This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

- Event capture is disabled by default. To enable it you have to pass the `capture` option in `addEventListener()`.

- This example is just like the bubbling example we saw earlier, except that we have used the `capture` option:

```
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick, { capture: true });
container.addEventListener('click', handleClick, { capture: true });
button.addEventListener('click', handleClick);
```

- In this case, the order of messages is reversed: the `<body>` event handler fires first, followed by the `<div>` event handler, followed by the `<button>` event handler:

```
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

- Why bother with both capturing and bubbling?
- In the bad old days, when browsers were much less cross-compatible than now, Netscape only used event capturing, and Internet Explorer used only event bubbling.
- When the W3C decided to try to standardize the behavior and reach a consensus, they ended up with this system that included both, which is what modern browsers implement.

- By default almost all event handlers are registered in the bubbling phase, and this makes more sense most of the time.

## Event delegation

- In the last section, we looked at a problem caused by event bubbling and how to fix it.
- Event bubbling isn't just annoying, though: it can be very useful.
- In particular, it enables **event delegation**.
- In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.

- Let's go back to our first example, where we set the background color of the whole page when the user clicked a button. Suppose that instead, the page is divided into 16 tiles, and we want to set each tile to a random color when the user clicks that tile.

- Here's the HTML:

```
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

- We have a little CSS, to set the size and position of the tiles:

```
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

- Now in JavaScript, we could add a click event handler for every tile. But a much simpler and more efficient option is to set the click event handler on the parent, and rely on event bubbling to ensure that the handler is executed when the user clicks on a tile:

```
function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector('#container');

container.addEventListener('click', (event) => event.target.style.backgroundColor = bgChange());
```

- **Note**: In this example, we're using `event.target` to get the element that was the target of the event (that is, the innermost element). If we wanted to access the element that handled this event (in this case the container) we could use `event.currentTarget`.
