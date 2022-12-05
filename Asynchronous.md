# Asynchronous JavaScript

# Introducing asynchronous JavaScript

- In this article, we'll explain what asynchronous programming is, why we need it, and briefly discuss some of the ways asynchronous functions have historically been implemented in JavaScript.

- Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

- Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

  - Making HTTP requests using `fetch()`
  - Accessing a user's camera or microphone using `getUserMedia()`
  - Asking a user to select files using `showOpenFilePicker()`

- So even though you may not have to _implement_ your own asynchronous functions very often, you are very likely to need to use them correctly.

- In this article, we'll start by looking at the problem with long-running synchronous functions, which make asynchronous programming a necessity.

## Synchronous programming

- Consider the following code:

```
const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

- This code:

  1. Declares a string called `name`.
  2. Declares another string called `greeting`, which uses `name`.
  3. Outputs the greeting to the JavaScript console.

- We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines.

- That makes this a **synchronous program**. It would still be synchronous even if we called a separate function, like this:

```
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = 'Miriam';
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

- Here, `makeGreeting()` is a **synchronous function** because the caller has to wait for the function to finish its work and return a value before the caller can continue.

### A long-running synchronous function

- What if the synchronous function takes a long time?

- The program below uses a very inefficient algorithm to generate multiple large prime numbers when a user clicks the "Generate primes" button. The higher the number of primes a user specifies, the longer the operation will take.

```
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>
```

```
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector('#quota');
const output = document.querySelector('#output');

document.querySelector('#generate').addEventListener('click', () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.location.reload();
});
```

- Try clicking "Generate primes". Depending on how fast your computer is, it will probably take a few seconds before the program displays the "Finished!" message.

### The trouble with long-running synchronous functions

- The next example is just like the last one, except we added a text box for you to type in. This time, click "Generate primes", and try typing in the text box immediately after.

- You'll find that while our `generatePrimes()` function is running, our program is completely unresponsive: you can't type anything, click anything, or do anything else.

- This is the basic problem with long-running synchronous functions. What we need is a way for our program to:

  1. Start a long-running operation by calling a function.
  2. Have that function start the operation and return immediately, so that our program can still be responsive to other events.
  3. Notify us with the result of the operation when it eventually completes.

- That's precisely what asynchronous functions can do. The rest of this module explains how they are implemented in JavaScript.

## Event handlers

- The description we just saw of asynchronous functions might remind you of event handlers, and if it does, you'd be right.
- Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens.
- If "the event" is "the asynchronous operation has completed", then that event could be used to notify the caller about the result of an asynchronous function call.

- Some early asynchronous APIs used events in just this way.
- The `XMLHttpRequest` API enables you to make HTTP requests to a remote server using JavaScript.
- Since this can take a long time, it's an asynchronous API, and you get notified about the progress and eventual completion of a request by attaching event listeners to the `XMLHttpRequest` object.

- The following example shows this in action. Press "Click to start request" to send a request. We create a new `XMLHttpRequest` and listen for its `loadend` event.
- The handler logs a "Finished!" message along with the status code.

- After adding the event listener we send the request. Note that after this, we can log "Started XHR request": that is, our program can continue to run while the request is going on, and our event handler will be called when the request is complete.

```
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
```

```
const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
  log.textContent = '';

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;});

document.querySelector('#reload').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});
```

- This is just like the event handlers we've encountered in a previous module, except that instead of the event being a user action, such as the user clicking a button, the event is a change in the state of some object.

## Callbacks

- An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

- However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, consider the following:

```
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

- Here we have a single operation that's split into three steps, where each step depends on the last step. In our example, the first step adds 1 to the input, the second adds 2, and the third adds 3.
- Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As a synchronous program, this is very straightforward. But what if we implemented the steps using callbacks?

```
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

- Because we have to call callbacks inside callbacks, we get a deeply nested `doOperation()` function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

- When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level.

- For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the `Promise`, and that's the subject of the next article.

# How to use promises

- **Promises** are the foundation of asynchronous programming in modern JavaScript.
- A promise is an object returned by an asynchronous function, which represents the current state of the operation.
- At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

- In the last article, we talked about the use of callbacks to implement asynchronous functions.
- With that design, you call the asynchronous function, passing in your callback function.
- The function returns immediately and calls your callback when the operation is finished.

- With a promise-based API, the asynchronous function starts the operation and returns a `Promise` object.
- You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.

## Using the fetch() API

- In this example, we'll download the JSON file from https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json, and log some information about it.

- To do this, we'll make an **HTTP request** to the server.
- In an HTTP request, we send a request message to a remote server, and it sends us back a response. In this case, we'll send a request to get a JSON file from the server.
- Remember in the last article, where we made HTTP requests using the `XMLHttpRequest` API?
  - Well, in this article, we'll use the `fetch()` API, which is the modern, promise-based replacement for `XMLHttpRequest`.

```
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

- Here we are:

1. calling the `fetch()` API, and assigning the return value to the `fetchPromise` variable
2. immediately after, logging the `fetchPromise` variable. This should output something like: `Promise { <state>: "pending" }`, telling us that we have a `Promise` object, and it has a state whose value is `"pending"`. The `"pending"` state means that the fetch operation is still going on.
3. passing a handler function into the Promise's `then()` method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a `Response` object, which contains the server's response.
4. logging a message that we have started the request.

- The complete output should be something like:

```
Promise { <state>: "pending" }
Started request…
Received response: 200
```

- Note that `Started request…` is logged before we receive the response.
- Unlike a synchronous function, `fetch()` returns while the request is still going on, enabling our program to stay responsive.
- The response shows the `200` (OK) status code, meaning that our request succeeded.

- This probably seems a lot like the example in the last article, where we added event handlers to the `XMLHttpRequest` object.
- Instead of that, we're passing a handler into the `then()` method of the returned promise.

## Chaining promises

- With the `fetch()` API, once you get a `Response` object, you need to call another function to get the response data.
- In this case, we want to get the response data as JSON, so we would call the `json()` method of the `Response` object.
- It turns out that `json()` is also asynchronous. So this is a case where we have to call two successive asynchronous functions.

- As an example:

```
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
```

- In this example, as before, we add a `then()` handler to the promise returned by `fetch()`.
- But this time, our handler calls `response.json()`, and then passes a new `then()` handler into the promise returned by `response.json()`.

- This should log "baked beans" (the name of the first product listed in "products.json").

- But wait! Remember the last article, where we said that by calling a callback inside another callback, we got successively more nested levels of code? And we said that this "callback hell" made our code hard to understand? Isn't this just the same, only with `then()` calls?

- It is, of course. But the elegant feature of promises is that `then()` _itself returns a promise, which will be completed with the result of the function passed to it_. This means that we can (and certainly should) rewrite the above code like this:

```
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

- Instead of calling the second `then()` inside the handler for the first `then()`, we can return the promise returned by `json()`, and call the second `then()` on that return value.
- This is called **promise chaining** and means we can avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.

- Before we move on to the next step, there's one more piece to add. We need to check that the server accepted and was able to handle the request, before we try to read it. We'll do this by checking the status code in the response and throwing an error if it wasn't "OK":

```
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
```

## Catching errors

- This brings us to the last piece: how do we handle errors? The `fetch()` API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.

- In the last article, we saw that error handling can get very difficult with nested callbacks, making us handle errors at every nesting level.

- To support error handling, Promise objects provide a `catch()` method. This is a lot like `then()`: you call it and pass in a handler function.
- However, while the handler passed to `then()` is called when the asynchronous operation succeeds, the handler passed to `catch()` is called when the asynchronous operation fails.

- If you add `catch()` to the end of a promise chain, then it will be called when any of the asynchronous function calls fails.
- So you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

- Try this version of our `fetch()` code. We've added an error handler using `catch()`, and also modified the URL so the request will fail.

```
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

- Try running this version: you should see the error logged by our `catch()` handler.

## Promise terminology

- Promises come with some quite specific terminology that it's worth getting clear about.

- First, a promise can be in one of three states:

  - **pending**: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to `fetch()`, and the request is still being made.
  - **fulfilled**: the asynchronous function has succeeded. When a promise is fulfilled, its `then()` handler is called.
  - **rejected**: the asynchronous function has failed. When a promise is rejected, its `catch()` handler is called.

- Note that what "succeeded" or "failed" means here is up to the API in question: for example, `fetch()` considers a request successful if the server returned an error like `404 Not Found`, but not if a network error prevented the request being sent.

- Sometimes, we use the term **settled** to cover both **fulfilled** and **rejected**.

- A promise is **resolved** if it is settled, or if it has been "locked in" to follow the state of another promise.

- The article Let's talk about how to talk about promises gives a great explanation of the details of this terminology.

## Combining multiple promises

- The promise chain is what you need when your operation consists of several asynchronous functions, and you need each one to complete before starting the next one. But there are other ways you might need to combine asynchronous function calls, and the `Promise` API provides some helpers for them.

- Sometimes, you need all the promises to be fulfilled, but they don't depend on each other. In a case like that, it's much more efficient to start them all off together, then be notified when they have all fulfilled.
- The `Promise.all()` method is what you need here. It takes an array of promises and returns a single promise.

- The promise returned by `Promise.all()` is:

  - fulfilled when and if _all_ the promises in the array are fulfilled. In this case, the `then()` handler is called with an array of all the responses, in the same order that the promises were passed into `all()`.
  - rejected when and if _any_ of the promises in the array are rejected. In this case, the `catch()` handler is called with the error thrown by the promise that rejected.

- For example:

```
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
```

- Here, we're making three `fetch()` requests to three different URLs. If they all succeed, we will log the response status of each one. If any of them fail, then we're logging the failure.

- With the URLs we've provided, all the requests should be fulfilled, although for the second, the server will return `404` (Not Found) instead of `200` (OK) because the requested file does not exist. So the output should be:

```
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

- If we try the same code with a badly formed URL, like this:

```
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
```

- Then we can expect the `catch()` handler to run, and we should see something like:

```
Failed to fetch: TypeError: Failed to fetch
```

- Sometimes, you might need any one of a set of promises to be fulfilled, and don't care which one. In that case, you want `Promise.any()`. This is like `Promise.all()`, except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected:

```
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
```

- Note that in this case we can't predict which fetch request will complete first.

- These are just two of the extra `Promise` functions for combining multiple promises. To learn about the rest, see the `Promise` reference documentation.

## async and await

- The `async` keyword gives you a simpler way to work with asynchronous promise-based code.
- Adding `async` at the start of a function makes it an async function:

```
async function myFunction() {
  // This is an async function
}
```

- Inside an async function, you can use the `await` keyword before a call to a function that returns a promise.
- This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

- This enables you to write code that uses asynchronous functions but looks like synchronous code. For example, we could use it to rewrite our fetch example:

```
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
```

- Here, we are calling `await fetch()`, and instead of getting a `Promise`, our caller gets back a fully complete `Response` object, just as if `fetch()` were a synchronous function!

- We can even use a `try...catch` block for error handling, exactly as we would if the code were synchronous.

- Note though that async functions always return a promise, so you can't do something like:

```
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name);   // "promise" is a Promise object, so this will not work
```

- Instead, you'd need to do something like:

```
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```

- Also, note that you can only use `await` inside an `async` function, unless your code is in a JavaScript module.
- That means you can't do this in a normal script:

```
try {
  // using await outside an async function is only allowed in a module
  const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
}
catch(error) {
  console.error(`Could not get products: ${error}`);
}
```

- You'll probably use `async` functions a lot where you might otherwise use promise chains, and they make working with promises much more intuitive.

- Keep in mind that just like a promise chain, `await` forces asynchronous operations to be completed in series.
- This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like `Promise.all()` will be more performant.

## Conclusion

- Promises are the foundation of asynchronous programming in modern JavaScript. They make it easier to express and reason about sequences of asynchronous operations without deeply nested callbacks, and they support a style of error handling that is similar to the synchronous `try...catch` statement.

- The `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.

- Promises work in the latest versions of all modern browsers; the only place where promise support will be a problem is in Opera Mini and IE11 and earlier versions.

- We didn't touch on all features of promises in this article, just the most interesting and useful ones. As you start to learn more about promises, you'll come across more features and techniques.

- Many modern Web APIs are promise-based, including WebRTC, Web Audio API, Media Capture and Streams API, and many more.

# How to implement a promise-based API

- In the last article we discussed how to use APIs that return promises. In this article we'll look at the other side — how to _implement_ APIs that return promises. This is a much less common task than using promise-based APIs, but it's still worth knowing about.

- Generally, when you implement a promise-based API, you'll be wrapping an asynchronous operation, which might use events, or plain callbacks, or a message-passing model. You'll arrange for a `Promise` object to handle the success or failure of that operation properly.

## Implementing an alarm() API

- In this example we'll implement a promise-based alarm API, called `alarm()`. It will take as arguments the name of the person to wake up and a delay in milliseconds to wait before waking the person up. After the delay, the function will send a "Wake up!" message, including the name of the person we need to wake up.

### Wrapping setTimeout()

- We'll use the `setTimeout()` API to implement our `alarm()` function. The `setTimeout()` API takes as arguments a callback function and a delay, given in milliseconds.
- When `setTimeout()` is called, it starts a timer set to the given delay, and when the time expires, it calls the given function.

- In the example below, we call `setTimeout()` with a callback function and a delay of 1000 milliseconds:

```
<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```
const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

function setAlarm() {
  setTimeout(() => {
    output.textContent = 'Wake up!';
  }, 1000);
}

button.addEventListener('click', setAlarm);
```
