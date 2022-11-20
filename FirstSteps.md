# JavaScript — Dynamic client-side scripting

- JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.

## Modules

```
Our policy on modern JavaScript

JavaScript is an actively evolving language and has changed greatly over the years. In particular, the 6th edition of the language (sometimes known as ECMAScript 2015 or ES6), introduced in 2015, added many new features. At the same time, to maintain backwards compatibility with older websites, old features of the language have been retained, even when they are no longer considered good practice.

We think that the features added to JavaScript in ECMAScript 2015 and subsequent versions enable developers to write more readable, reliable, and expressive code, and that it's important to learn about them.

The features we teach in this course are stable and have been supported by all major browsers for several years.
```

# What is JavaScript?

- In this article we will look at JavaScript from a high level, answering questions such as "What is it?" and "What can you do with it?", and making sure you are comfortable with JavaScript's purpose.

## A high-level definition

- It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

- HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
- CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.
- JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

- Let's look at a simple example, starting with the HTML:

```
<p>Player 1: Chris</p>
```

- We then can add some CSS

```
p {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0, 0, 200, 0.6);
  background: rgba(0, 0, 200, 0.3);
  color: rgba(0, 0, 200, 0.6);
  box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
}
```

- Finally, also some JavaScript

```
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
```

## So what can it really do?

- The core client-side JavaScript language consists of some common programming features that allow you to do things like:

  - Store useful values inside variables. In the above example for instance, we ask for a new name to be entered then store that name in a variable called name.
  - Operations on pieces of text (known as "strings" in programming). In the above example we take the string "Player 1: " and join it to the `name` variable to create the complete text label, e.g. "Player 1: Chris".
  - Running code in response to certain events occurring on a web page. We used a `click` event in our example above to detect when the label is clicked and then run the code that updates the text label.

- What is even more exciting however is the functionality built on top of the client-side JavaScript language.
- So-called Application Programming Interfaces (APIs) provide you with extra superpowers to use in your JavaScript code.

- APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.
- They do the same thing for programming that ready-made furniture kits do for home building — it is much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and then put them together to make a bookshelf.

- They generally fall into two categories.

![browser](./assets/browser.png)

- **Browser APIs** are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. For example:

  - The `DOM (Document Object Model) API` allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc.
    - Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.
  - The `Geolocation API` retrieves geographical information.
    - This is how Google Maps is able to find your location and plot it on a map.
  - The `Canvas` and `WebGL` APIs allow you to create animated 2D and 3D graphics.
    - People are doing some amazing things using these web technologies — see Chrome Experiments and webglsamples.
  - Audio and Video APIs like `HTMLMediaElement` and `WebRTC` allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer (try our simple Snapshot demo to get the idea).

- **Note**: Many of the above demos won't work in an older browser — when experimenting, it's a good idea to use a modern browser like Firefox, Chrome, Edge or Opera to run your code in.
- You will need to consider cross browser testing in more detail when you get closer to delivering production code (i.e. real code that real customers will use).

- **Third party APIs** are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web. For example:
  - The Twitter API allows you to do things like displaying your latest tweets on your website.
  - The Google Maps API and OpenStreetMap API allows you to embed custom maps into your website, and other such functionality.

## What is JavaScript doing on your page?

- Here we'll actually start looking at some code, and while doing so, explore what actually happens when you run some JavaScript in your page.

- Let's briefly recap the story of what happens when you load a web page in a browser (first talked about in our How CSS works article).
- When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab).
- This is like a factory that takes in raw materials (the code) and outputs a product (the web page).

![execution](./assets/execution.png)

- A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above).
- Note that the code in your web documents is generally loaded and executed in the order it appears on the page.
- Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is intended to modify. You will learn ways around this later in the article, in the Script loading strategies section.

### Browser security

- Each browser tab has its own separate bucket for running code in (these buckets are called "**execution environments**" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website.
- This is a good security measure — if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.

- **Note**: There are ways to send code and data between different websites/tabs in a safe manner, but these are advanced techniques that we won't cover in this course.

### JavaScript running order

- When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in.
- For example, let's return to the block of JavaScript we saw in our first example:

```
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
```

- Here we are selecting a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is clicked, the `updateName()` code block (lines 5–8) is run.
- The `updateName()` code block (these types of reusable code blocks are called "functions") asks the user for a new name, and then inserts that name into the paragraph to update the display.

- If you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the browser developer console — `TypeError: para is undefined`. This means that the `para` object does not exist yet, so we can't add an event listener to it.

- **Note**: This is a very common error — you need to be careful that the objects referenced in your code exist before you try to do stuff to them.

### Interpreted versus compiled code

- You might hear the terms **interpreted** and **compiled** in the context of programming.
- In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned.
- You don't have to transform the code into a different form before the browser runs it.
- The code is received in its programmer-friendly text form and processed directly from that.

- Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer.
- For example, C/C++ are compiled into machine code that is then run by the computer.
- The program is executed from a binary format, which was generated from the original program source code.

- JavaScript is a lightweight interpreted programming language.
- The web browser receives the JavaScript code in its original text form and runs the script from that.
- From a technical standpoint, most modern JavaScript interpreters actually use a technique called **just-in-time compiling** to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible.
- However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, rather than ahead of time.

- There are advantages to both types of language, but we won't discuss them right now.

### Server-side versus client-side code

- You might also hear the terms **server-side** and **client-side** code, especially in the context of web development.
  - Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. In this module we are explicitly talking about client-side JavaScript.
  - Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.
    - Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET, and even JavaScript!
    - JavaScript can also be used as a server-side language, for example in the popular Node.js environment — you can find out more about server-side JavaScript in our Dynamic Websites – Server-side programming topic.

### Dynamic versus static code

- The word **dynamic** is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.
- Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JavaScript dynamically generates new content inside the browser on the client, e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user.
- The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

- A web page with no dynamically updating content is referred to as **static** — it just shows the same content all the time.

## How do you add JavaScript to your page?

- JavaScript is applied to your HTML page in a similar manner to CSS. Whereas CSS uses `<link>` elements to apply external stylesheets and `<style>` elements to apply internal stylesheets to HTML, JavaScript only needs one friend in the world of HTML — the `<script>` element. Let's learn how this works.

### Internal JavaScript

1. First of all, make a local copy of our example file `apply-javascript.html`.
2. Open the file in your web browser and in your text editor. You'll see that the HTML creates a simple web page containing a clickable button.
3. Next, go to your text editor and add the following in your head — just before your closing `</head>` tag:

```
<script>
  // JavaScript goes here
</script>
```

4. Now we'll add some JavaScript inside our `<script>` element to make the page do something more interesting — add the following code just below the "// JavaScript goes here" line:

### External JavaScript

- This works great, but what if we wanted to put our JavaScript in an external file? Let's explore this now.

1. First, create a new file in the same directory as your sample HTML file. Call it `script.js` — make sure it has that `.js` filename extension, as that's how it is recognized as JavaScript.
2. Replace your current `<script>` element with the following:

```
<script src="script.js" defer></script>
```

3. Inside `script.js`, add the corresponding script inside the file.

### Inline JavaScript handlers

- Note that sometimes you'll come across bits of actual JavaScript code living inside HTML. It might look something like this:

```
function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
```

```
<button onclick="createParagraph()">Click me!</button>
```

- This demo has exactly the same functionality as in the previous two sections, except that the `<button>` element includes an inline onclick handler to make the function run when the button is pressed.

- **Please don't do this, however**.
- It is bad practice to pollute your HTML with JavaScript, and it is inefficient — you'd have to include the `onclick="createParagraph()"` attribute on every button you want the JavaScript to apply to.

### Using addEventListener instead

- Instead of including JavaScript in your HTML, use a pure JavaScript construct.
- The `querySelectorAll()` function allows you to select all the buttons on a page.
- You can then loop through the buttons, assigning a handler for each using `addEventListener()`. The code for this is shown below:

```
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}
```

- This might be a bit longer than the `onclick` attribute, but it will work for all buttons — no matter how many are on the page, nor how many are added or removed.
- The JavaScript does not need to be changed.

### Script loading strategies

- There are a number of issues involved with getting scripts to load at the right time.
  - Nothing is as simple as it seems!
- A common problem is that all the HTML on a page is loaded in the order in which it appears.
- If you are using JavaScript to manipulate elements on the page (or more accurately, the Document Object Model), your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to.

- In the above code examples, in the internal and external examples the JavaScript is loaded and run in the head of the document, before the HTML body is parsed.
- This could cause an error, so we've used some constructs to get around it.

- In the internal example, you can see this structure around the code:

```
document.addEventListener('DOMContentLoaded', () => {
  // …
});
```

- This is an event listener, which listens for the browser's `DOMContentLoaded` event, which signifies that the HTML body is completely loaded and parsed.
- The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided (you'll learn about events later in the course).

- In the external example, we use a more modern JavaScript feature to solve the problem, the `defer` attribute, which tells the browser to continue downloading the HTML content once the `<script>` tag element has been reached.

```
<script src="script.js" defer></script>
```

- **Note**: In the external case, we did not need to use the `DOMContentLoaded` event because the `defer` attribute solved the problem for us. We didn't use the `defer` solution for the internal JavaScript example because `defer` only works for external scripts.

- An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the `</body>` tag), so that it would load after all the HTML has been parsed.
- The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded.
- On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

## async and defer

- There are actually two modern features we can use to bypass the problem of the blocking script — `async` and `defer` (which we saw above). Let's look at the difference between these two.

- Scripts loaded using the `async` attribute will download the script without blocking the page while the script is being fetched.
- However, once the download is complete, the script will execute, which blocks the page from rendering.
- You get no guarantee that scripts will run in any specific order.
- It is best to use `async` when the scripts in the page run independently from each other and depend on no other script on the page.

- Scripts loaded with the `defer` attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).

- Here is a visual representation of the different script loading methods and what that means for your page:

![async-await](assets/async-defer.jpg)

- For example, if you have the following:

```
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

- You can't rely on the order the scripts will load in.
- `jquery.js` may load before or after `script2.js` and `script3.js` and if this is the case, any functions in those scripts depending on `jquery` will produce an error because `jquery` will not be defined at the time the script runs.

- `async` should be used when you have a bunch of background scripts to load in, and you just want to get them in place as soon as possible.

  - For example, maybe you have some game data files to load, which will be needed when the game actually begins, but for now you just want to get on with showing the game intro, titles, and lobby, without them being blocked by script loading.

- Scripts loaded using the `defer` attribute (see below) will run in the order they appear in the page and execute them as soon as the script and content are downloaded:

```
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

- In the second example, we can be sure that `jquery.js` will load before `script2.js` and `script3.js` and that `script2.js` will load before `script3.js`. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one of more elements on the page).

- To summarize:
  - `async` and `defer` both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.
  - scripts with an `async` attribute will execute as soon as the download is complete.
    - This blocks the page and does not guarantee any specific execution order.
  - scripts with a `defer` attribute will load in the order they are in and will only execute once everything has finished loading.
  - If your scripts should be run immediately and they don't have any dependencies, then use `async`.
  - If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using `defer` and put their corresponding `<script>` elements in the order you want the browser to execute them.

## Comments

- As with HTML and CSS, it is possible to write comments into your JavaScript code that will be ignored by the browser, and exist to provide instructions to your fellow developers on how the code works (and you, if you come back to your code after six months and can't remember what you did).
- Comments are very useful, and you should use them often, particularly for larger applications. There are two types:

- A single line comment is written after a double forward slash (//), e.g.

```
// I am a comment
```

- A multi-line comment is written between the strings /_ and _/, e.g.

```
/*
  I am also
  a comment
*/
```

- So for example, we could annotate our last demo's JavaScript with comments like so:

```
// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}
```

- **Note**: In general more comments are usually better than less, but you should be careful if you find yourself adding lots of comments to explain what variables are (your variable names perhaps should be more intuitive), or to explain very simple operations (maybe your code is overcomplicated).

# A first splash into JavaScript

- Now you've learned something about the theory of JavaScript and what you can do with it, we are going to give you an idea of what the process of creating a simple JavaScript program is like, by guiding you through a practical tutorial. Here you'll build up a simple "Guess the number" game, step by step.

## Thinking like a programmer

- One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real world problems.
- You need to start thinking like a programmer — this generally involves looking at descriptions of what your program needs to do, working out what code features are needed to achieve those things, and how to make them work together.

- This requires a mixture of hard work, experience with the programming syntax, and practice — plus a bit of creativity.
- The more you code, the better you'll get at it. We can't promise that you'll develop "programmer brain" in five minutes, but we will give you plenty of opportunities to practice thinking like a programmer throughout the course.

- With that in mind, let's look at the example we'll be building up in this article, and review the general process of dissecting it into tangible tasks.

## Example - Guess the number game

- Let's imagine your boss has given you the following brief for creating this game:

```
I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.
```

- Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
   1. Display congratulations message.
   2. Stop the player from being able to enter more guesses (this would mess the game up).
   3. Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
   1. Tell the player they are wrong and whether their guess was too high or too low.
   2. Allow them to enter another guess.
   3. Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
   1. Tell the player it is game over.
   2. Stop the player from being able to enter more guesses (this would mess the game up).
   3. Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

- This section of the code sets up the variables and constants we need to store the data our program will use.

- Variables are basically names for values (such as numbers, or strings of text). You create a variable with the keyword `let` followed by a name for your variable.

- Constants are also used to name values, but unlike variables, you can't change the value once set. In this case, we are using constants to store references to parts of our user interface. The text inside some of these elements might change, but each constant always references the same HTML element that it was initialized with. You create a constant with the keyword `const` followed by a name for the constant.

- You can assign a value to your variable or constant with an equals sign (`=`) followed by the value you want to give it.

### Functions

- Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time. This is really useful.
- There are a number of ways to define functions, but for now we'll concentrate on one simple type.
- Here we have defined a function by using the keyword `function`, followed by a name, with parentheses put after it. After that, we put two curly braces (`{ }`).
- Inside the curly braces goes all the code that we want to run whenever we call the function.

### Operators

- JavaScript operators allow us to perform tests, do math, join strings together, and other such things.

| Operator | Name           | Example |
| -------- | -------------- | ------- |
| +        | Addition       | 6 + 9   |
| -        | Subtraction    | 20 - 15 |
| \*       | Multiplication | 3 \* 7  |
| /        | Division       | 10 / 5  |

- You can also use the + operator to join text strings together (in programming, this is called concatenation). Try entering the following lines, one at a time:

```
const name = 'Bingo';
name;
const hello = ' says hello!';
hello;
const greeting = name + hello;
greeting;
```

- There are also some shortcut operators available, called **augmented assignment operators**. For example, if you want to add a new text string to an existing one and return the result, you could do this:

```
let name1 = 'Bingo';
name1 += ' says hello!';
```

- When we are running true/false tests (for example inside conditionals — see below) we use comparison operators. For example:

| Operator | Name                                      | Example                                                                                                                |
| -------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `===`    | Strict equality (is it exactly the same?) | 5 === 2 + 4 // false <br>'Chris' === 'Bob' // false<br>5 === 2 + 3 // true<br>2 === '2' // false; number versus string |
| `!==`    | Non-equality (is it not the same?)        | 5 !== 2 + 4 // true<br>'Chris' !== 'Bob' // true<br>5 !== 2 + 3 // false<br>2 !== '2' // true; number versus string    |
| `<`      | Less than                                 | 6 < 10 // true<br>20 < 10 // false<br>                                                                                 |
| `>`      | Greater than                              | > 6 > 10 // false<br>> 20 > 10 // true                                                                                 |

### Conditionals

- Returning to our `checkGuess()` function, I think it's safe to say that we don't want it to just spit out a placeholder message. We want it to check whether a player's guess is correct or not, and respond appropriately.

### Events

- At this point, we have a nicely implemented `checkGuess()` function, but it won't do anything because we haven't called it yet.
- Ideally, we want to call it when the "Submit guess" button is pressed, and to do this we need to use an event.
- **Events** are things that happen in the browser — a button being clicked, a page loading, a video playing, etc. — in response to which we can run blocks of code.
- **Event listeners** observe specific events and call **event handlers**, which are blocks of code that run in response to an event firing.

- For example:

```
guessSubmit.addEventListener('click', checkGuess);
```

- Here we are adding an event listener to the `guessSubmit` button.
- This is a method that takes two input values (called _arguments_) — the type of event we are listening out for (in this case `click`) as a string, and the code we want to run when the event occurs (in this case the `checkGuess()` function).
- **Note that we don't need to specify the parentheses when writing it inside `addEventListener()`.**

- Try saving and refreshing your code now, and your example should work — to a point.
- The only problem now is that if you guess the correct answer or run out of guesses, the game will break because we've not yet defined the `setGameOver()` function that is supposed to be run once the game is over. Let's add our missing code now and complete the example functionality.

### Finishing the game functionality

```
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}
```

- The first two lines disable the form text input and button by setting their disabled properties to `true`.
  - This is necessary, because if we didn't, the user could submit more guesses after the game is over, which would mess things up.
- The next three lines generate a new `<button>` element, set its text label to "Start new game", and add it to the bottom of our existing HTML.
- The final line sets an event listener on our new button so that when it is clicked, a function called `resetGame()` is run.
- Now we need to define this function too! Add the following code, again to the bottom of your JavaScript:

```
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

- This rather long block of code completely resets everything to how it was at the start of the game, so the player can have another go. It:
  - Puts the `guessCount` back down to 1.
  - Empties all the text out of the information paragraphs. We select all paragraphs inside `<div class="resultParas"></div>`, then loop through each one, setting their `textContent` to `''` (an empty string).
  - Removes the reset button from our code.
  - Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
  - Removes the background color from the `lastResult` paragraph.
  - Generates a new random number so that you are not just guessing the same number again!

### Loops

- One part of the above code that we need to take a more detailed look at is the `for...of` loop.
- Loops are a very important concept in programming, which allow you to keep running a piece of code over and over again, until a certain condition is met.

- For example:

```
const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
  console.log(fruit);
}
```

- What happened? The strings `'apples', 'bananas', 'cherries'` were printed out in your console.

- This is because of the loop.
- The line `const fruits = ['apples', 'bananas', 'cherries'];` creates an array.
- We will work through a complete Arrays guide later in this module, but for now: an array is a collection of items (in this case strings).

- A `for...of` loop gives you a way to get each item in the array and run some JavaScript on it. The line for (`const fruit of fruits`) says:

  1. Get the first item in `fruits`.
  2. Set the `fruit` variable to that item, then run the code between the `{}` brackets.
  3. Get the next item in `fruits`, and repeat 2, until you reach the end of `fruits`.

- In this case, the code inside the brackets is writing out `fruit` to the console.

- Now let's look at the loop in our number guessing game — the following can be found inside the `resetGame()` function:

```
const resetParas = document.querySelectorAll('.resultParas p');
for (const resetPara of resetParas) {
  resetPara.textContent = '';
}
```

- This code creates a variable containing a list of all the paragraphs inside `<div class="resultParas">` using the `querySelectorAll()` method, then it loops through each one, removing the text content of each.

- Note that even though `resetPara` is a constant, we can change its internal properties like `textContent`.

### A small discussion on objects

- Let's add one more final improvement before we get to this discussion.
- Add the following line just below the `let resetButton`; line near the top of your JavaScript, then save your file:

```
guessField.focus();
```

- This line uses the `focus()` method to automatically put the text cursor into the `<input>` text field as soon as the page loads, meaning that the user can start typing their first guess right away, without having to click the form field first.
- It's only a small addition, but it improves usability — giving the user a good visual clue as to what they've got to do to play the game.

- Let's analyze what's going on here in a bit more detail.
- In JavaScript, most of the items you will manipulate in your code are objects.
- An object is a collection of related functionality stored in a single grouping.
- You can create your own objects, but that is quite advanced and we won't be covering it until much later in the course.
- For now, we'll just briefly discuss the built-in objects that your browser contains, which allow you to do lots of useful things.

- In this particular case, we first created a `guessField` constant that stores a reference to the text input form field in our HTML — the following line can be found amongst our declarations near the top of the code:

```
const guessField = document.querySelector('.guessField');
```

- To get this reference, we used the `querySelector()` method of the document object. `querySelector()` takes one piece of information — a CSS selector that selects the element you want a reference to.

- Because `guessField` now contains a reference to an `<input>` element, it now has access to a number of properties (basically variables stored inside objects, some of which can't have their values changed) and methods (basically functions stored inside objects).
- One method available to input elements is `focus()`, so we can now use this line to focus the text input:

```
guessField.focus();
```

- Variables that don't contain references to form elements won't have `focus()` available to them.
- For example, the guesses constant contains a reference to a `<p>` element, and the `guessCount` variable contains a number.

### Playing with browser objects

1. First of all, open up your program in a browser.
2. Next, open your browser developer tools, and make sure the JavaScript console tab is open.
3. Type `guessField` into the console and the console shows you that the variable contains an `<input>` element. You'll also notice that the console autocompletes the names of objects that exist inside the execution environment, including your variables!
4. Now type in the following:

```
guessField.value = 2;
```

5. The `value` property represents the current value entered into the text field. You'll see that by entering this command, we've changed the text in the text field!
6. Now try typing `guesses` into the console and pressing return. The console shows you that the variable contains a `<p>` element.
7. Now try entering the following line:

```
guesses.value
```

8. The browser returns `undefined`, because paragraphs don't have the `value` property.
9. To change the text inside a paragraph, you need the `textContent` property instead. Try this:

```
guesses.textContent = 'Where is my paragraph?';
```

10. Now for some fun stuff. Try entering the below lines, one by one:

```
guesses.style.backgroundColor = 'yellow';
guesses.style.fontSize = '200%';
guesses.style.padding = '10px';
guesses.style.boxShadow = '3px 3px 6px black';
```

- Every element on a page has a style property, which itself contains an object whose properties contain all the inline CSS styles applied to that element. This allows us to dynamically set new CSS styles on elements using JavaScript.

# What went wrong? Troubleshooting JavaScript

- When you built up the "Guess the number" game in the previous article, you may have found that it didn't work.
- Never fear — this article aims to save you from tearing your hair out over such problems by providing you with some tips on how to find and fix errors in JavaScript programs.

## Types of error

- Generally speaking, when you do something wrong in code, there are two main types of error that you'll come across:

- **Syntax errors**: These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through — you will usually be provided with some error messages too.
  - These are usually okay to fix, as long as you are familiar with the right tools and know what the error messages mean!
- **Logic errors**: These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results.

  - These are often harder to fix than syntax errors, as there usually isn't an error message to direct you to the source of the error.

- Okay, so it's not quite that simple — there are some other differentiators as you drill down deeper. But the above classifications will do at this early stage in your career. We'll look at both of these types going forward.

## An erroneous example

- We will work through this erroneous example and looking at the console for the errors

## Fixing syntax errors

- What's even more useful is that the console gives you error messages whenever a syntax error exists inside the JavaScript being fed into the browser's JavaScript engine. Now let's go hunting.

## A logic error

- At this point, the game should play through fine, however after playing through a few times you'll undoubtedly notice that the "random" number you've got to guess is always 1. Definitely not quite how we want the game to play out!

## Other common errors

- There are other common errors you'll come across in your code. This section highlights most of them.

### SyntaxError: missing ; before statement

- This error generally means that you have missed a semicolon at the end of one of your lines of code, but it can sometimes be more cryptic. For example, if we change this line inside the `checkGuess()` function:

```
const userGuess = Number(guessField.value);
```

- to

```
const userGuess === Number(guessField.value);
```

- It also throws this error. You should make sure that you don't mix up the assignment operator (`=`) — which sets a variable to be equal to a value — with the strict equality operator (`===`), which tests whether one value is equal to another, and returns a `true`/`false` result.

### The program always says you've won, regardless of the guess you enter

- This could be another symptom of mixing up the assignment and strict equality operators. For example, if we were to change this line inside `checkGuess()`:

```
if (userGuess === randomNumber) {
```

- To:

```
if (userGuess = randomNumber) {
```

- the test would always return `true`, causing the program to report that the game has been won. Be careful!

### SyntaxError: missing ) after argument list

- This one is pretty simple — it generally means that you've missed the closing parenthesis at the end of a function/method call.

### SyntaxError: missing : after property id

- This error usually relates to an incorrectly formed JavaScript object, but in this case we managed to get it by changing

```
function checkGuess() {
```

- To:

```
function checkGuess( {
```

- This has caused the browser to think that we are trying to pass the contents of the function into the function as an argument. Be careful with those parentheses!

### SyntaxError: missing } after function body

- This is easy — it generally means that you've missed one of your curly braces from a function or conditional structure. We got this error by deleting one of the closing curly braces near the bottom of the `checkGuess()` function.

### SyntaxError: expected expression, got 'string' or SyntaxError: unterminated string literal

- These errors generally mean that you've left off a string value's opening or closing quote mark. In the first error above, _string_ would be replaced with the unexpected character(s) that the browser found instead of a quote mark at the start of a string. The second error means that the string has not been ended with a quote mark.

- For all of these errors, think about how we tackled the examples we looked at in the walkthrough. When an error arises, look at the line number you are given, go to that line and see if you can spot what's wrong. Bear in mind that the error is not necessarily going to be on that line, and also that the error might not be caused by the exact same problem we cited above!

# Storing the information you need — Variables

- After reading the last couple of articles you should now know what JavaScript is, what it can do for you, how you use it alongside other web technologies, and what its main features look like from a high level. In this article, we will get down to the real basics, looking at how to work with the most basic building blocks of JavaScript — Variables.

## What is a variable?

- A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

### Variable example

- A simple example:

```
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>
```

```
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
}
```

- In this example pressing the button runs some code. The first line pops a box up on the screen that asks the reader to enter their name, and then stores the value in a variable. The second line displays a welcome message that includes their name, taken from the variable value and the third line displays that name on the page.

### Without a variable

- To understand why this is so useful, let's think about how we'd write this example without using a variable. It would end up looking something like this:

```
<button id="button_B">Press me</button>
<h3 id="heading_B"></h3>
```

```
const buttonB = document.querySelector('#button_B');
const headingB = document.querySelector('#heading_B');

buttonB.onclick = () => {
    alert(`Hello ${prompt('What is your name?')}, nice to see you!`);
    headingB.textContent = `Welcome ${prompt('What is your name?')}`;
}
```

- You may not fully understand the syntax we are using (yet!), but you should be able to get the idea. If we didn't have variables available, we'd have to ask the reader for their name every time we needed to use it!

- Variables just make sense, and as you learn more about JavaScript they will start to become second nature.

- One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things. You'll learn more about this as you go along.

- **Note**: We say variables contain values. This is an important distinction to make. Variables aren't the values themselves; they are containers for values. You can think of them being like little cardboard boxes that you can store things in.

## Declaring a variable

- To use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword `let` followed by the name you want to call your variable:

```
let myName;
let myAge;
```

- They currently have no value; they are empty containers. When you enter the variable names, you should get a value of `undefined` returned. If they don't exist, you'll get an error message — try typing in.

- **Note**: Don't confuse a variable that exists but has no defined value with a variable that doesn't exist at all — they are very different things. In the box analogy you saw above, not existing would mean there's no box (variable) for a value to go in. No value defined would mean that there is a box, but it has no value inside it.

## Initializing a variable

- Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (`=`), followed by the value you want to give it. For example:

```
myName = 'Chris';
myAge = 37;
```

- You can declare and initialize a variable at the same time, like this:

```
let myDog = 'Rover';
```

- This is probably what you'll do most of the time, as it is quicker than doing the two actions on two separate lines.

## A note about var

- You'll probably also see a different way to declare variables, using the `var` keyword:

```
var myName;
var myAge;
```

- Back when JavaScript was first created, this was the only way to declare variables. The design of `var` is confusing and error-prone.
- So `let` was created in modern versions of JavaScript, a new keyword for creating variables that works somewhat differently to var, fixing its issues in the process.

- A couple of simple differences are explained below. We won't go into all the differences now, but you'll start to discover them as you learn more about JavaScript (if you really want to read about them now, feel free to check out our let reference page).

- For a start, if you write a multiline JavaScript program that declares and initializes a variable, you can actually declare a variable with `var` after you initialize it and it will still work. For example:

```
myName = 'Chris';

function logName() {
  console.log(myName);
}

logName();

var myName;
```

- This works because of **hoisting** — read var hoisting for more detail on the subject.

- Hoisting no longer works with `let`. If we changed `var` to `let` in the above example, it would fail with an error.
- This is a good thing — declaring a variable after you initialize it results in confusing, harder to understand code.

- Secondly, when you use `var`, you can declare the same variable as many times as you like, but with let you can't. The following would work:

```
var myName = 'Chris';
var myName = 'Bob';
```

- But the following would throw an error on the second line:

```
let myName = 'Chris';
let myName = 'Bob';
```

- You'd have to do this instead:

```
let myName = 'Chris';
myName = 'Bob';
```

- Again, this is a sensible language decision. There is no reason to redeclare variables — it just makes things more confusing.

- For these reasons and more, we recommend that you use `let` in your code, rather than `var`. There is no longer any reason to use `var`, as it has been supported since Internet Explorer 11.

# Basic math in JavaScript — numbers and operators

- At this point in the course, we discuss math in JavaScript — how we can use operators and other features to successfully manipulate numbers to do our bidding.

## Everybody loves math

- Okay, maybe not. Some of us like math, some of us have hated math ever since we had to learn multiplication tables and long division in school, and some of us sit somewhere in between the two. But none of us can deny that math is a fundamental part of life that we can't get very far without. This is especially true when we are learning to program JavaScript (or any other language for that matter) — so much of what we do relies on processing numerical data, calculating new values, and so on, that you won't be surprised to learn that JavaScript has a full-featured set of math functions available.

### Types of numbers

- In programming, even the humble decimal number system that we all know so well is more complicated than you might think. We use different terms to describe different types of decimal numbers, for example:
  - **Integers** are floating-point numbers without a fraction. They can either be positive or negative, e.g. 10, 400, or -5.
  - **Floating point numbers** (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.
  - **Doubles** are a specific type of floating point number that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).
- We even have different types of number systems! Decimal is base 10 (meaning it uses 0–9 in each column), but we also have things like:

  - **Binary** — The lowest level language of computers; 0s and 1s.
  - **Octal** — Base 8, uses 0–7 in each column.
  - **Hexadecimal** — Base 16, uses 0–9 and then a–f in each column. You may have encountered these numbers before when setting colors in CSS.

- Unlike some other programming languages, JavaScript only has one data type for numbers, both integers and decimals — you guessed it, Number. This means that whatever type of numbers you are dealing with in JavaScript, you handle them in exactly the same way.

### It's all numbers to me

- A quick example

```
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;
```

- Number values are typed in without quote marks — try declaring and initializing a couple more variables containing numbers before you move on.

- Now let's check that both our original variables are of the same datatype. There is an operator called `typeof` in JavaScript that does this. Enter the below two lines as shown:

```
typeof myInt;
typeof myFloat;
```

- You should get "number" returned in both cases — this makes things a lot easier for us than if different numbers had different data types, and we had to deal with them in different ways. Phew!

### Useful Number methods

- The `Number` object, an instance of which represents all standard numbers you'll use in your JavaScript, has a number of useful methods available on it for you to manipulate numbers.
- We don't cover these in detail in this article because we wanted to keep it as a simple introduction and only cover the real basic essentials for now; however, once you've read through this module a couple of times it is worth going to the object reference pages and learning more about what's available.

- For example, to round your number to a fixed number of decimal places, use the `toFixed()` method. Type the following lines into your browser's console:

```
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Converting to number data types

- Sometimes you might end up with a number that is stored as a string type, which makes it difficult to perform calculations with it.
- This most commonly happens when data is entered into a form input, and the input type is text.
  - There is a way to solve this problem — passing the string value into the `Number()` constructor to return a number version of the same value.

For example, try typing these lines into your console:

```
let myNumber = "74";
myNumber += 3;
```

- You end up with the result 743, not 77, because `myNumber` is actually defined as a string.

- To fix the calculation, you can do this:

```
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

## Arithmetic operators

- Arithmetic operators are the basic operators that we use to do sums in JavaScript:
  - `+` for addition
  - `-` for subtraction
  - `*` for multiplication
  - `/` for division
  - `%` for modulo
  - `**` for exponent

### Operator precedence

- Take the example, where `num1` is 10, and `num2` is 50:

```
num2 + num1 / 8 + 2;
```

- As a human being, you may read this as "50 plus 10 equals 60", then "8 plus 2 equals 10", and finally "60 divided by 10 equals 6". Not true by pemdas.

- But the browser does "10 divided by 8 equals 1.25", then "50 plus 1.25 plus 2 equals 53.25".

- This is because of **operator precedence** — some operators are applied before others when calculating the result of a calculation (referred to as an expression, in programming). Operator precedence in JavaScript is the same as is taught in math classes in school — multiply and divide are always done first, then add and subtract (the calculation is always evaluated from left to right).

## Increment and decrement operators

- Sometimes you'll want to repeatedly add or subtract one to or from a numeric variable value. This can be conveniently done using the increment (`++`) and decrement (`--`) operators.
- We used `++` in our "Guess the number" game back in our first splash into JavaScript article, when we added 1 to our guessCount variable to keep track of how many guesses the user has left after each turn.

- Uou can only increment an existing variable. Like this:

```
let num1 = 4;
num1++;
```

- **Note**: You can make the browser do it the other way round — increment/decrement the variable then return the value — by putting the operator at the start of the variable instead of the end.
- Try the above examples again, but this time use `++num1` and `--num2`.

## Assignment operators

- Assignment operators are operators that assign a value to a variable. We have already used the most basic one, `=`, loads of times — it assigns the variable on the left the value stated on the right:

```
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

- But there are some more complex types, which provide useful shortcuts to keep your code neater and more efficient. The most common are listed below:
  - `+=`
  - `-=`
  - `*=`
  - `/=`

## Comparison operators

- `===`, strict equality
- `!==`, strict-non-equality
- `<`, less than
- `>`, greater than
- `<=`, less than or equal to
- `>=`, greater than or equal to

- **Note**: You may see some people using `==` and `!=` in their tests for equality and non-equality. These are valid operators in JavaScript, but they differ from `===`/`!==`.
- The former versions test whether the values are the same but not whether the values' datatypes are the same.
- The latter, strict versions test the equality of both the values and their datatypes. The strict versions tend to result in fewer errors, so we recommend you use them.

# Handling text — strings in JavaScript

- Next, we'll turn our attention to strings — this is what pieces of text are called in programming. In this article, we'll look at all the common things that you really ought to know about strings when learning JavaScript, such as creating strings, escaping quotes in strings, and joining strings together.

## The power of words

- Words are very important to humans — they are a large part of how we communicate. Since the Web is a largely text-based medium designed to allow humans to communicate and share information, it is useful for us to have control over the words that appear on it. HTML provides structure and meaning to our text, CSS allows us to precisely style it, and JavaScript contains a number of features for manipulating strings, creating custom welcome messages and prompts, showing the right text labels when needed, sorting terms into the desired order, and much more.

- Pretty much all of the programs we've shown you so far in the course have involved some string manipulation.

## Strings — the basics

- Initialize as normal with double quotes

### Single quotes vs. double quotes

1. In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both of the following will work okay:

```
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);
```

2. There is very little difference between the two, and which you use is down to personal preference. You should choose one and stick to it, however; differently quoted code can be confusing, especially if you use two different quotes on the same string! The following will return an error:

```
const badQuotes = 'What on earth?";
```

3. The browser will think the string has not been closed because the other type of quote you are not using to contain your strings can appear in the string. For example, both of these are okay:

```
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);
```

4. However, you can't include the same quote mark inside the string if it's being used to contain them. The following will error, as it confuses the browser as to where the string ends:

```
const bigmouth = 'I've got no right to take my place…';
```

### Escaping characters in a string

- To fix our previous problem code line, we need to escape the problem quote mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:

```
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

## Concatenating strings

- Concatenate just means "join together". To join together strings in JavaScript you can use a different type of string, called a **template literal**.

- A template literal looks just like a normal string, but instead of using single or double quote marks (`'` or `"`), you use backtick characters (\`):

```
const greeting = \`Hello\`;
```

- This can work just like a normal string, except you can include variables in it, wrapped inside `${ }` characters, and the variable's value will be inserted into the result:

```
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

- You can use the same technique to join together two variables:

```
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

### Concatenation in context

- Here's a quick example:

```
<button>Press me</button>
```

```
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);
```

- Here we're using the `window.prompt()` function, which asks the user to answer a question via a popup dialog box then stores the text they enter inside a given variable — in this case name.
- We then use the `window.alert()` function to display another popup containing a string which inserts the name into a generic greeting message.

### Concatenation using "+"

- You can also concatenate strings using the `+` operator:

```
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

- However, template literals usually give you more readable code:

```
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

## Numbers vs. strings

- So what happens when we try to combine a string and a number? Let's try it in our console:

```
const name = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"
```

- You might expect this to return an error, but it works just fine. Trying to represent a string as a number doesn't really make sense, but representing a number as a string does, so the browser converts the number to a string and concatenates the two strings.

- If you have a numeric variable that you want to convert to a string but not change otherwise, or a string variable that you want to convert to a number but not change otherwise, you can use the following two constructs:

  - The `Number` object converts anything passed to it into a number, if it can. Try the following:

```
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
```

- Conversely, every number has a method called `toString()` that converts it to the equivalent string. Try this:

```
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
```

## Including expressions in strings

- You can include JavaScript expressions in template literals, as well as simple variables, and the results will be included in the result:

```
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${ (score / highestScore) * 100 }%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## Multiline strings

- Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

```
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/
```

- To have the equivalent output using a normal string you'd have to include line break characters (`\n`) in the string:

```
const output = "I like the song.\nI gave it a score of 90%.";
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/
```

# Useful string methods

- Now that we've looked at the very basics of strings, let's move up a gear and start thinking about what useful operations we can do on strings with built-in methods, such as finding the length of a text string, joining and splitting strings, substituting one character in a string for another, and more.

## Strings as objects

- Most things are objects in JavaScript. When you create a string, for example by using

```
const string = 'This is my string';
```

- your variable becomes a string object instance, and as a result has a large number of properties and methods available to it. You can see this if you go to the `String` object page and look down the list on the side of the page!

## Finding the length of a string

- This is easy — you use the length property. Try entering the following lines:

```
const browserType = 'mozilla';
browserType.length;
```

- This should return the number 7, because "mozilla" is 7 characters long.
- This is useful for many reasons; for example, you might want to find the lengths of a series of names so you can display them in order of length, or let a user know that a username they have entered into a form field is too long if it is over a certain length.

## Retrieving a specific string character

- On a related note, you can return any character inside a string by using **square bracket notation** — this means you include square brackets (`[]`) on the end of your variable name.
- Inside the square brackets, you include the number of the character you want to return, so for example to retrieve the first letter you'd do this:

```
browserType[0];
```

- To retrieve the last character of any string, we could use the following line, combining this technique with the `length` property we looked at above:

```
browserType[browserType.length-1];
```

## Testing if a string contains a substring

- Sometimes you'll want to find if a smaller string is present inside a larger one (we generally say if a substring is present inside a string). This can be done using the `includes()` method, which takes a single parameter — the substring you want to search for.

- It returns `true` if the string contains the substring, and `false` otherwise.

```
const browserType = 'mozilla';

if (browserType.includes('zilla')) {
console.log('Found zilla!');
} else {
console.log('No zilla here!');
}
```

- Often you'll want to know if a string starts or ends with a particular substring. This is a common enough need that there are two special methods for this: `startsWith()` and `endsWith()`:

```
const browserType = 'mozilla';

if (browserType.startsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}
```

```
const browserType = 'mozilla';

if (browserType.endsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}
```

## Finding the position of a substring in a string

- You can find the position of a substring inside a larger string using the `indexOf()` method. This method takes two parameters – the substring that you want to search for, and an optional parameter that specifies the starting point of the search.

- If the string contains the substring, `indexOf()` returns the index of the first occurrence of the substring. If the string does not contain the substring, `indexOf()` returns -1.

```
const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers')); // 20
```

- Starting at 0, if you count the number of characters (including the whitespace) from the beginning of the string, the first occurrence of the substring "developers" is at index 20.

```
console.log(tagline.indexOf('x')); // -1
```

- This, on the other hand, returns -1 because the character x is not present in the string.

- So now that you know how to find the first occurrence of a substring, how do you go about finding subsequent occurrences? You can do that by passing in a value that's greater than the index of the previous occurrence as the second parameter to the method.

```
const firstOccurrence = tagline.indexOf('developers');
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

- Here we're telling the method to search for the substring `"developers"` starting at index 21 (`firstOccurrence + 1`), and it returns the index 35.

## Extracting a substring from a string

- You can extract a substring from a string using the `slice()` method. You pass it:
  - the index at which to start extracting
  - the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.
- For example:

```
const browserType = 'mozilla';
console.log(browserType.slice(1, 4)); // "ozi"
```

- If you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter. Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:

```
browserType.slice(2); // "zilla"
```

- Note: slice() has other options too.

## Changing case

- The string methods `toLowerCase()` and `toUpperCase()` take a string and convert all the characters to lower- or uppercase, respectively.
- This can be useful for example if you want to normalize all user-entered data before storing it in a database.

```
const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Updating parts of a string

- You can replace one substring inside a string with another substring using the `replace()` method.

- In this example, we're providing two parameters — the string we want to replace, and the string we want to replace it with:

```
const browserType = 'mozilla';
const updated = browserType.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"
```

- **Note that `replace()`, like many string methods, doesn't change the string it was called on, but returns a new string.**
- If you want to update the original `browserType` variable, you would have to do something like this:

```
let browserType = 'mozilla';
browserType = browserType.replace('moz','van');

console.log(browserType);  // "vanilla"
```

- Also note that we now have to declare `browserType` using `let`, not `const`, because we are reassigning it.

- Be aware that `replace()` in this form only changes the first occurrence of the substring. If you want to change all occurrences, you can use `replaceAll()`:

```
let quote = 'To be or not to be';
quote = quote.replaceAll('be','code');

console.log(quote);  // "To code or not to code"
```

# Arrays

- In the final article of this module, we'll look at arrays — a neat way of storing a list of data items under a single variable name. Here we look at why this is useful, then explore how to create an array, retrieve, add, and remove items stored in an array, and more besides.
