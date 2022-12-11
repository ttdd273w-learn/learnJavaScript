# Client-side web APIs

- When writing client-side JavaScript for web sites or applications, you will quickly encounter **Application Programming Interfaces**(APIs).
- APIs are programming features for manipulating different aspects of the browser and operating system the site is running on, or manipulating data from other web sites or services.
- In this module, we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work.

# Introduction to web APIs

- First up, we'll start by looking at APIs from a high level — what are they, how do they work, how to use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.

## What are APIs?

- Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

- As a real-world example, think about the electricity supply in your house, apartment, or other dwellings. If you want to use an appliance in your house, you plug it into a plug socket and it works. You don't try to wire it directly into the power supply — to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.

- In the same way, if you want to say, program some 3D graphics, it is a lot easier to do it using an API written in a higher-level language such as JavaScript or Python, rather than try to directly write low-level code (say C or C++) that directly controls the computer's GPU or other graphics functions.

### APIs in client-side JavaScript

- Client-side JavaScript, in particular, has many APIs available to it — these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. They generally fall into two categories:
  - **Browser APIs** are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. For example, the Web Audio API provides JavaScript constructs for manipulating audio in the browser — taking an audio track, altering its volume, applying effects to it, etc. In the background, the browser is actually using some complex lower-level code (e.g. C++ or Rust) to do the actual audio processing. But again, this complexity is abstracted away from you by the API.
  - **Third-party APIs** are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web. For example, the Twitter API allows you to do things like displaying your latest tweets on your website. It provides a special set of constructs you can use to query the Twitter service and return specific information.

![browser](./assets/browser.png)

### Relationship between JavaScript, APIs, and other JavaScript tools

- So above, we talked about what client-side JavaScript APIs are, and how they relate to the JavaScript language. Let's recap this to make it clearer, and also mention where other JavaScript tools fit in:
  - JavaScript — A high-level scripting language built into browsers that allows you to implement functionality on web pages/apps. Note that JavaScript is also available in other programming environments, such as Node.
  - Browser APIs — constructs built into the browser that sits on top of the JavaScript language and allows you to implement functionality more easily.
  - Third-party APIs — constructs built into third-party platforms (e.g. Twitter, Facebook) that allow you to use some of those platform's functionality in your own web pages (for example, display your latest Tweets on your web page).
  - JavaScript libraries — Usually one or more JavaScript files containing custom functions that you can attach to your web page to speed up or enable writing common functionality. Examples include jQuery, Mootools and React.
  - JavaScript frameworks — The next step up from libraries, JavaScript frameworks (e.g. Angular and Ember) tend to be packages of HTML, CSS, JavaScript, and other technologies that you install and then use to write an entire web application from scratch. The key difference between a library and a framework is **"Inversion of Control"**. When calling a method from a library, the developer is in control. With a framework, the control is inverted: the framework calls the developer's code.

## What can APIs do?

- There are a huge number of APIs available in modern browsers that allow you to do a wide variety of things in your code. You can see this by taking a look at the MDN APIs index page.

### Common browser APIs

- In particular, the most common categories of browser APIs you'll use (and which we'll cover in this module in greater detail) are:
  - **APIs for manipulating documents** loaded into the browser. The most obvious example is the DOM (Document Object Model) API, which allows you to manipulate HTML and CSS — creating, removing and changing HTML, dynamically applying new styles to your page, etc.
    - Every time you see a popup window appear on a page or some new content displayed, for example, that's the DOM in action. Find out more about these types of API in Manipulating documents.
  - **APIs that fetch data from the server** to update small sections of a webpage on their own are very commonly used.
    - This seemingly small detail has had a huge impact on the performance and behavior of sites — if you just need to update a stock listing or list of available new stories, doing it instantly without having to reload the whole entire page from the server can make the site or app feel much more responsive and "snappy".
    - The main API used for this is the _Fetch API_, although older code might still use the `XMLHttpRequest` API. You may also come across the term **Ajax**, which describes this technique. Find out more about such APIs in Fetching data from the server.
  - **APIs for drawing and manipulating graphics** are widely supported in browsers — the most popular ones are _Canvas_ and _WebGL_, which allow you to programmatically update the pixel data contained in an HTML `<canvas>` element to create 2D and 3D scenes.
    - For example, you might draw shapes such as rectangles or circles, import an image onto the canvas, and apply a filter to it such as sepia or grayscale using the Canvas API, or create a complex 3D scene with lighting and textures using WebGL. Such APIs are often combined with APIs for creating animation loops (such as `window.requestAnimationFrame()`) and others to make constantly updating scenes like cartoons and games.
  - **Audio and Video APIs** like `HTMLMediaElement`, the _Web Audio API_, and _WebRTC_ allow you to do really interesting things with multimedia such as creating custom UI controls for playing audio and video, displaying text tracks like captions and subtitles along with your videos, grabbing video from your web camera to be manipulated via a canvas (see above) or displayed on someone else's computer in a web conference, or adding effects to audio tracks (such as gain, distortion, panning, etc.).
  - **Device APIs** enable you to interact with device hardware: for example, accessing the device GPS to find the user's position using the _Geolocation API_.
  - **Client-side storage APIs** enable you to store data on the client-side, so you can create an app that will save its state between page loads, and perhaps even work when the device is offline. There are several options available, e.g. simple name/value storage with the _Web Storage API_, and more complex database storage with the _IndexedDB API_.

### Common third-party APIs

- Third-party APIs come in a large variety; some of the more popular ones that you are likely to make use of sooner or later are:
  - The _Twitter API_, which allows you to do things like displaying your latest tweets on your website.
  - Map APIs, like _Mapquest_ and the _Google Maps API_, which allow you to do all sorts of things with maps on your web pages.
  - The _Facebook suite of APIs_, which enables you to use various parts of the Facebook ecosystem to benefit your app, such as by providing app login using Facebook login, accepting in-app payments, rolling out targeted ad campaigns, etc.
  - The _Telegram APIs_, which allows you to embed content from Telegram channels on your website, in addition to providing support for bots.
  - The _YouTube API_, which allows you to embed YouTube videos on your site, search YouTube, build playlists, and more.
  - The _Pinterest API_, which provides tools to manage Pinterest boards and pins to include them in your website.
  - The _Twilio API_, which provides a framework for building voice and video call functionality into your app, sending SMS/MMS from your apps, and more.
  - The _Mastodon API_, which enables you to manipulate features of the Mastodon social network programmatically.

## How do APIs work?

- Different JavaScript APIs work in slightly different ways, but generally, they have common features and similar themes to how they work.

### They are based on objects

- Your code interacts with APIs using one or more JavaScript objects, which serve as containers for the data the API uses (contained in object properties), and the functionality the API makes available (contained in object methods).

- Let's return to the example of the Web Audio API — this is a fairly complex API, which consists of a number of objects. The most obvious ones are

  - `AudioContext`, which represents an audio graph that can be used to manipulate audio playing inside the browser, and has a number of methods and properties available to manipulate that audio.
  - `MediaElementAudioSourceNode`, which represents an `<audio>` element containing sound you want to play and manipulate inside the audio context.
  - `AudioDestinationNode`, which represents the destination of the audio, i.e. the device on your computer that will actually output it — usually your speakers or headphones.

- So how do these objects interact? If you look at our simple web audio example, you'll first see the following HTML:

```
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

- We, first of all, include an `<audio>` element with which we embed an MP3 into the page.
- We don't include any default browser controls.
- Next, we include a `<button>` that we'll use to play and stop the music, and an `<input>` element of type range, which we'll use to adjust the volume of the track while it's playing.

- Next, let's look at the JavaScript for this example.

- We start by creating an `AudioContext` instance inside which to manipulate our track:

```
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

- Next, we create constants that store references to our `<audio>`, `<button>`, and `<input>` elements, and use the `AudioContext.createMediaElementSource()` method to create a `MediaElementAudioSourceNode` representing the source of our audio — the `<audio>` element will be played from:

```
const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

- Next up we include a couple of event handlers that serve to toggle between play and pause when the button is pressed and reset the display back to the beginning when the song has finished playing:

```
// play/pause audio
playBtn.addEventListener('click', () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === 'suspended') {
     audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute('class') === 'paused') {
    audioElement.play();
    playBtn.setAttribute('class', 'playing');
    playBtn.textContent = 'Pause'
    // if track is playing, stop it
} else if (playBtn.getAttribute('class') === 'playing') {
    audioElement.pause();
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Play';
  }
});

// if track ends
audioElement.addEventListener('ended', () => {
  playBtn.setAttribute('class', 'paused');
  playBtn.textContent = 'Play'
});
```

- **Note**: Some of you may notice that the `play()` and `pause()` methods being used to play and pause the track are not part of the Web Audio API; they are part of the `HTMLMediaElement` API, which is different but closely-related.

- Next, we create a `GainNode` object using the `AudioContext.createGain()` method, which can be used to adjust the volume of audio fed through it, and create another event handler that changes the value of the audio graph's gain (volume) whenever the slider value is changed:

```
// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener('input', () => {
  gainNode.gain.value = volumeSlider.value;
});
```

- The final thing to do to get this to work is to connect the different nodes in the audio graph up, which is done using the `AudioNode.connect()` method available on every node type:

```
audioSource.connect(gainNode).connect(audioCtx.destination);
```

- The audio starts in the source, which is then connected to the gain node so the audio's volume can be adjusted. The gain node is then connected to the destination node so the sound can be played on your computer (the `AudioContext.destination` property represents whatever is the default `AudioDestinationNode` available on your computer's hardware, e.g. your speakers).

### They have recognizable entry points

- When using an API, you should make sure you know where the entry point is for the API.

  - In The Web Audio API, this is pretty simple — it is the `AudioContext` object, which needs to be used to do any audio manipulation whatsoever.

- The Document Object Model (DOM) API also has a simple entry point — its features tend to be found hanging off the `Document` object, or an instance of an HTML element that you want to affect in some way, for example:

```
const em = document.createElement('em'); // create a new em element
const para = document.querySelector('p'); // reference an existing p element
em.textContent = 'Hello there!'; // give em some text content
para.appendChild(em); // embed em inside para
```

- The Canvas API also relies on getting a context object to use to manipulate things, although in this case, it's a graphical context rather than an audio context.
  - Its context object is created by getting a reference to the `<canvas>` element you want to draw on, and then calling its `HTMLCanvasElement.getContext()` method:

```
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
```

- Anything that we want to do to the canvas is then achieved by calling properties and methods of the context object (which is an instance of `CanvasRenderingContext2D`), for example:

```
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

### They often use events to handle changes in state

- We already discussed events earlier on in the course in our Introduction to events article, which looks in detail at what client-side web events are and how they are used in your code.

- Some web APIs contain no events, but most contain at least a few. The handler properties that allow us to run functions when events fire are generally listed in our reference material in separate "Event handlers" sections.

- We already saw a number of event handlers in use in our Web Audio API example above:

```
// play/pause audio
playBtn.addEventListener('click', () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === 'suspended') {
     audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute('class') === 'paused') {
    audioElement.play();
    playBtn.setAttribute('class', 'playing');
    playBtn.textContent = 'Pause'
    // if track is playing, stop it
} else if (playBtn.getAttribute('class') === 'playing') {
    audioElement.pause();
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Play';
  }
});

// if track ends
audioElement.addEventListener('ended', () => {
  playBtn.setAttribute('class', 'paused');
  playBtn.textContent = 'Play'
});
```

### They have additional security mechanisms where appropriate

- WebAPI features are subject to the same security considerations as JavaScript and other web technologies (for example same-origin policy), but they sometimes have additional security mechanisms in place.
- For example, some of the more modern WebAPIs will only work on pages served over HTTPS due to them transmitting potentially sensitive data (examples include Service Workers and Push).

- In addition, some WebAPIs request permission to be enabled from the user once calls to them are made in your code. As an example, the Notifications API asks for permission using a pop-up dialog box:

![dialogueBox](./assets/notification-permission.png)

- The Web Audio and `HTMLMediaElement` APIs are subject to a security mechanism called _autoplay policy_ — this basically means that you can't automatically play audio when a page loads — you've got to allow your users to initiate audio play through a control like a button.
- This is done because autoplaying audio is usually really annoying and we really shouldn't be subjecting our users to it.

- **Note**: Depending on how strict the browser is, such security mechanisms might even stop the example from working locally, i.e. if you load the local example file in your browser instead of running it from a web server. At the time of writing, our Web Audio API example wouldn't work locally on Google Chrome — we had to upload it to GitHub before it would work.

# Manipulating documents

- When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way.
- This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the `Document` object.
- In this article we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.

## The important parts of a web browser

- Web browsers are very complicated pieces of software with a lot of moving parts, many of which can't be controlled or manipulated by a web developer using JavaScript.
- You might think that such limitations are a bad thing, but browsers are locked down for good reasons, mostly centering around security.
- Imagine if a web site could get access to your stored passwords or other sensitive information, and log into websites as if it were you?

- Despite the limitations, Web APIs still give us access to a lot of functionality that enable us to do a great many things with web pages.
- There are a few really obvious bits you'll reference regularly in your code — consider the following diagram, which represents the main parts of a browser directly involved in viewing web pages:

![website-parts](./assets/document-window-navigator.png)

- The window is the browser tab that a web page is loaded into; this is represented in JavaScript by the `Window` object.
  - Using methods available on this object you can do things like return the window's size (see `Window.innerWidth` and `Window.innerHeight`), manipulate the document loaded into that window, store data specific to that document on the client-side (for example using a local database or other storage mechanism), attach an event handler to the current window, and more.
- The navigator represents the state and identity of the browser (i.e. the user-agent) as it exists on the web.
  - In JavaScript, this is represented by the `Navigator` object.
  - You can use this object to retrieve things like the user's preferred language, a media stream from the user's webcam, etc.
- The document (represented by the DOM in browsers) is the actual page loaded into the window, and is represented in JavaScript by the `Document` object.

  - You can use this object to return and manipulate information on the HTML and CSS that comprises the document, for example get a reference to an element in the DOM, change its text content, apply new styles to it, create new elements and add them to the current element as children, or even delete it altogether.

- In this article we'll focus mostly on manipulating the document, but we'll show a few other useful bits besides.

## The document object model

- The document currently loaded in each one of your browser tabs is represented by a document object model.
- This is a "tree structure" representation created by the browser that enables the HTML structure to be easily accessed by programming languages — for example the browser itself uses it to apply styling and other information to the correct elements as it renders a page, and developers like you can manipulate the DOM with JavaScript after the page has been rendered.

- We have created a simple example page.
- It is a very simple page containing a `<section>` element inside which you can find an image, and a paragraph with a link inside. The HTML source code looks like this:

```
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

- The DOM on the other hand looks like this:

![dom](./assets/dom-screenshot.png)

- Each entry in the tree is called a **node**.
- You can see in the diagram above that some nodes represent elements (identified as `HTML`, `HEAD`, `META` and so on) and others represent text (identified as #text).
- There are other types of nodes as well, but these are the main ones you'll encounter.

- Nodes are also referred to by their position in the tree relative to other nodes:

  - **Root node**: The top node in the tree, which in the case of HTML is always the `HTML` node (other markup vocabularies like SVG and custom XML will have different root elements).
  - **Child node**: A node _directly_ inside another node. For example, `IMG` is a child of `SECTION` in the above example.
  - **Descendant node**: A node anywhere inside another node. For example, `IMG` is a child of `SECTION` in the above example, and it is also a descendant. `IMG` is not a child of `BODY`, as it is two levels below it in the tree, but it is a descendant of `BODY`.
  - **Parent node**: A node which has another node inside it. For example, `BODY` is the parent node of `SECTION` in the above example.
  - **Sibling nodes**: Nodes that sit on the same level in the DOM tree. For example, `IMG` and `P` are siblings in the above example.

- It is useful to familiarize yourself with this terminology before working with the DOM, as a number of the code terms you'll come across make use of them. You may have also come across them if you have studied CSS (e.g. descendant selector, child selector).

## Active learning: Basic DOM manipulation

- We will work through another example:

1. Add a `<script></script>` element just above the closing `</body>` tag.
2. To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable. Inside your script element, add the following line:

```
const link = document.querySelector('a');
```

4. Now we have the element reference stored in a variable, we can start to manipulate it using properties and methods available to it (these are defined on interfaces like `HTMLAnchorElement` in the case of `<a>` element, its more general parent interface `HTMLElement`, and `Node` — which represents all nodes in a DOM). First of all, let's change the text inside the link by updating the value of the `Node.textContent` property. Add the following line below the previous one:

```
link.textContent = 'Mozilla Developer Network';
```

5. We should also change the URL the link is pointing to, so that it doesn't go to the wrong place when it is clicked on. Add the following line, again at the bottom:

```
link.href = 'https://developer.mozilla.org';
```

- Note that, as with many things in JavaScript, there are many ways to select an element and store a reference to it in a variable.
- `Document.querySelector()` is the recommended modern approach. It is convenient because it allows you to select elements using CSS selectors.
- The above `querySelector()` call will match the first `<a>` element that appears in the document. If you wanted to match and do things to multiple elements, you could use `Document.querySelectorAll()`, which matches every element in the document that matches the selector, and stores references to them in an array-like object called a `NodeList`.

- There are older methods available for grabbing element references, such as:

  - `Document.getElementById()`, which selects an element with a given id attribute value, e.g. `<p id="myId">My paragraph</p>`. The ID is passed to the function as a parameter, i.e. `const elementRef = document.getElementById('myId')`.
  - `Document.getElementsByTagName()`, which returns an array-like object containing all the elements on the page of a given type, for example `<p>`s, `<a>`s, etc.
  - The element type is passed to the function as a parameter, i.e. `const elementRefArray = document.getElementsByTagName('p')`.

- These two work better in older browsers than the modern methods like `querySelector()`, but are not as convenient. Have a look and see what others you can find!

### Creating and placing new nodes

- The above has given you a little taste of what you can do, but let's go further and look at how we can create new elements.

1. Going back to the current example, let's start by grabbing a reference to our `<section>` element — add the following code at the bottom of your existing script (do the same with the other lines too):

```
const sect = document.querySelector('section');
```

2. Now let's create a new paragraph using `Document.createElement()` and give it some text content in the same way as before:

```
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
```

3. You can now append the new paragraph at the end of the section using `Node.appendChild()`:

```
sect.appendChild(para);
```

4. Finally for this part, let's add a text node to the paragraph the link sits inside, to round off the sentence nicely. First we will create the text node using `Document.createTextNode()`:

```
const text = document.createTextNode(' — the premier source for web development knowledge.');
```

5. Now we'll grab a reference to the paragraph the link is inside, and append the text node to it:

- That's most of what you need for adding nodes to the DOM — you'll make a lot of use of these methods when building dynamic interfaces (we'll look at some examples later).

### Moving and removing elements

- There may be times when you want to move nodes, or delete them from the DOM altogether. This is perfectly possible.

- If we wanted to move the paragraph with the link inside it to the bottom of the section, we could do this:

```
sect.appendChild(linkPara);
```

- This moves the paragraph down to the bottom of the section.
- You might have thought it would make a second copy of it, but this is not the case — `linkPara` is a reference to the one and only copy of that paragraph.
- If you wanted to make a copy and add that as well, you'd need to use `Node.cloneNode()` instead.

- Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use `Node.removeChild()`, like this:

```
sect.removeChild(linkPara);
```

- When you want to remove a node based only on a reference to itself, which is fairly common, you can use `Element.remove()`:

```
linkPara.remove();
```

- This method is not supported in older browsers. They have no method to tell a node to remove itself, so you'd have to do the following.

```
linkPara.parentNode.removeChild(linkPara);
```

### Manipulating styles

- It is possible to manipulate CSS styles via JavaScript in a variety of ways.

- To start with, you can get a list of all the stylesheets attached to a document using `Document.stylesheets`, which returns an array-like object with CSSStyleSheet objects.
- You can then add/remove styles as wished.
- However, we're not going to expand on those features because they are a somewhat archaic and difficult way to manipulate style. There are much easier ways.

- The first way is to add inline styles directly onto elements you want to dynamically style. This is done with the `HTMLElement.style` property, which contains inline styling information for each element in the document.
- You can set properties of this object to directly update element styles.

1. As an example, try adding these lines to our ongoing example:

```
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
```

2. Reload the page and you'll see that the styles have been applied to the paragraph. If you look at that paragraph in your browser's Page Inspector/DOM inspector, you'll see that these lines are indeed adding inline styles to the document:

```
<p
  style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
  We hope you enjoyed the ride.
</p>
```

- **Note**: Notice how the JavaScript property versions of the CSS styles are written in lower camel case whereas the CSS versions are hyphenated (e.g. `backgroundColor` versus `background-color`). Make sure you don't get these mixed up, otherwise it won't work.

- There is another common way to dynamically manipulate styles on your document, which we'll look at now.

1. Delete the previous five lines you added to the JavaScript.
2. Add the following inside your HTML `<head>`:

```
<style>
  .highlight {
    color: white;
    background-color: black;
    padding: 10px;
    width: 250px;
    text-align: center;
  }
</style>
```

3. Now we'll turn to a very useful method for general HTML manipulation — `Element.setAttribute()` — this takes two arguments, the attribute you want to set on the element, and the value you want to set it to. In this case we will set a class name of highlight on our paragraph:

```
para.setAttribute('class', 'highlight');
```

- Refresh your page, and you'll see no change — the CSS is still applied to the paragraph, but this time by giving it a class that is selected by our CSS rule, not as inline CSS styles.

- Which method you choose is up to you; both have their advantages and disadvantages.
- The first method takes less setup and is good for simple uses, whereas the second method is more purist (no mixing CSS and JavaScript, no inline styles, which are seen as a bad practice).
- As you start building larger and more involved apps, you will probably start using the second method more, but it is really up to you.

- At this point, we haven't really done anything useful!
- There is no point using JavaScript to create static content — you might as well just write it into your HTML and not use JavaScript.
- It is more complex than HTML, and creating your content with JavaScript also has other issues attached to it (such as not being readable by search engines).

## Active learning: A dynamic shopping list

- In this challenge we want to make a simple shopping list example that allows you to dynamically add items to the list using a form input and button. When you add an item to the input and press the button:
  - The item should appear in the list.
  - Each item should be given a button that can be pressed to delete that item off the list.
  - The input should be emptied and focused ready for you to enter another item.

1. To start with, make a copy of the file. You'll see that it has some minimal CSS, a div with a label, input, and button, and an empty list and `<script>` element. You'll be making all your additions inside the script.
2. Create three variables that hold references to the list (`<ul>`), `<input>`, and `<button>` elements.
3. Create a function that will run in response to the button being clicked.
4. Inside the function body, start off by storing the current value of the input element in a variable.
5. Next, empty the input element by setting its value to an empty string — `''`.
6. Create three new elements — a list item (`<li>`), `<span>`, and `<button>`, and store them in variables.
7. Append the span and the button as children of the list item.
8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to `'Delete'`.
9. Append the list item as a child of the list.
10. Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (`<li>...</li>`).
11. Finally, use the `focus()` method to focus the input element ready for entering the next shopping list item.

## Summary

- We have reached the end of our study of document and DOM manipulation. At this point you should understand what the important parts of a web browser are with respect to controlling documents and other aspects of the user's web experience. Most importantly, you should understand what the Document Object Model is, and how to manipulate it to create useful functionality.

## See also

- There are lots more features you can use to manipulate your documents. Check out some of our references and see what you can discover:
  - `Document`
  - `Window`
  - `Node`
  - `HTMLElement`, `HTMLInputElement`, `HTMLImageElement`, etc.

# Fetching data from the server

- Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entire new page. This seemingly small detail has had a huge impact on the performance and behavior of sites, so in this article, we'll explain the concept and look at technologies that make it possible: in particular, the Fetch API.

## What is the problem here?

- A web page consists of an HTML page and (usually) various other files, such as stylesheets, scripts, and images.
- The basic model of page loading on the Web is that your browser makes one or more HTTP requests to the server for the files needed to display the page, and the server responds with the requested files.
- If you visit another page, the browser requests the new files, and the server responds with them.

![traditional-loading](./assets/traditional-loading.png)

- This model works perfectly well for many sites. But consider a website that's very data-driven.
- For example, a library website like the Vancouver Public Library.
- Among other things you could think of a site like this as a user interface to a database.
- It might let you search for a particular genre of book, or might show you recommendations for books you might like, based on books you've previously borrowed.
- When you do this, it needs to update the page with the new set of books to display.
- But note that most of the page content — including items like the page header, sidebar, and footer — stays the same.

- The trouble with the traditional model here is that we'd have to fetch and load the entire page, even when we only need to update one part of it.
- This is inefficient and can result in a poor user experience.

- So instead of the traditional model, many websites use JavaScript APIs to request data from the server and update the page content without a page load.
- So when the user searches for a new product, the browser only requests the data which is needed to update the page — the set of new books to display, for instance.

![fetch-update](./assets/fetch-update.png)

- The main API here is the Fetch API.
- This enables JavaScript running in a page to make an HTTP request to a server to retrieve specific resources.
- When the server provides them, the JavaScript can use the data to update the page, typically by using DOM manipulation APIs.
- The data requested is often JSON, which is a good format for transferring structured data, but can also be HTML or just text.

- This is a common pattern for data-driven sites such as Amazon, YouTube, eBay, and so on. With this model:

  - Page updates are a lot quicker and you don't have to wait for the page to refresh, meaning that the site feels faster and more responsive.
  - Less data is downloaded on each update, meaning less wasted bandwidth. This may not be such a big issue on a desktop on a broadband connection, but it's a major issue on mobile devices and in countries that don't have ubiquitous fast internet service.

- **Note**: In the early days, this general technique was known as Asynchronous JavaScript and XML (**Ajax**), because it tended to request XML data. This is normally not the case these days (you'd be more likely to request JSON), but the result is still the same, and the term "Ajax" is still often used to describe the technique.

- To speed things up even further, some sites also store assets and data on the user's computer when they are first requested, meaning that on subsequent visits they use the local versions instead of downloading fresh copies every time the page is first loaded. The content is only reloaded from the server when it has been updated.

## The Fetch API

- Let's walk through a couple of examples of the Fetch API.

### Fetching text content

- For this example, we'll request data out of a few different text files and use them to populate a content area.

- This series of files will act as our fake database; in a real application, we'd be more likely to use a server-side language like PHP, Python, or Node to request our data from a database.
- Here, however, we want to keep it simple and concentrate on the client-side part of this.

- To begin this example, make a local copy of fetch-start.html and the four text files — verse1.txt, verse2.txt, verse3.txt, and verse4.txt — in a new directory on your computer. In this example, we will fetch a different verse of the poem (which you may well recognize) when it's selected in the drop-down menu.

- Just inside the `<script>` element, add the following code. This stores references to the `<select>` and `<pre>` elements and adds a listener to the `<select>` element, so that when the user selects a new value, the new value is passed to function named `updateDisplay()` as a parameter.

- A `<pre>` tag defines a preformatted text, displayed in a fixed-width font, and the text preserves both spaces and line breaks.

```
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.addEventListener('change', () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

- Let's define our `updateDisplay()` function. First of all, put the following beneath your previous code block — this is the empty shell of the function.

```
function updateDisplay(verse) {

}
```

- We'll start our function by constructing a relative URL pointing to the text file we want to load, as we'll need it later.
- The value of the `<select>` element at any time is the same as the text inside the selected `<option>` (unless you specify a different value in a value attribute) — so for example "Verse 1".
- The corresponding verse text file is "verse1.txt", and is in the same directory as the HTML file, therefore just the file name will do.

- However, web servers tend to be case sensitive, and the file name doesn't have a space in it.
- To convert "Verse 1" to "verse1.txt" we need to convert the V to lower case, remove the space, and add `.txt` on the end. This can be done with `replace()`, `toLowerCase()`, and string concatenation. Add the following lines inside your `updateDisplay()` function:

```
verse = verse.replace(' ', '').toLowerCase();
const url = `${verse}.txt`;
```

- Finally, we're ready to use the Fetch API:

```
// Call `fetch()`, passing in the URL.
fetch(url)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => poemDisplay.textContent = text)
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => poemDisplay.textContent = `Could not fetch verse: ${error}`);
```

- There's quite a lot to unpack in here.

- First, the entry point to the Fetch API is a global function called `fetch()`, that takes the URL as a parameter (it takes another optional parameter for custom settings, but we're not using that here).

- Next, `fetch()` is an asynchronous API which returns a Promise. You'll find that article also talks about the `fetch()` API!

- So because `fetch()` returns a promise, we pass a function into the `then()` method of the returned promise.
- This method will be called when the HTTP request has received a response from the server. In the handler, we check that the request succeeded, and throw an error if it didn't. Otherwise, we call `response.text()`, to get the response body as text.

- It turns out that `response.text()` is also asynchronous, so we return the promise it returns, and pass a function into the `then()` method of this new promise. This function will be called when the response text is ready, and inside it we will update our `<pre>` block with the text.

- Finally, we chain a `catch()` handler at the end, to catch any errors thrown in either of the asynchronous functions we called or their handlers.

- One problem with the example as it stands is that it won't show any of the poem when it first loads. To fix this, add the following two lines at the bottom of your code (just above the closing `</script>` tag) to load verse 1 by default, and make sure the `<select>` element always shows the correct value:

```
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
```

### Serving your example from a server

- Modern browsers will not run HTTP requests if you just run the example from a local file. This is because of security restrictions (for more on web security, read Website security).

- To get around this, we need to test the example by running it through a local web server. To find out how to do this, read our guide to setting up a local testing server.

### The can store

- In this example we have created a sample site called The Can Store — it's a fictional supermarket that only sells canned goods. You can find this example live on GitHub, and see the source code.

- By default, the site displays all the products, but you can use the form controls in the left-hand column to filter them by category, or search term, or both.

- There is quite a lot of complex code that deals with filtering the products by category and search terms, manipulating strings so the data displays correctly in the UI, etc.
- We won't discuss all of it in the article, but you can find extensive comments in the code (see `can-script.js`).

- We will, however, explain the Fetch code.

- The first block that uses Fetch can be found at the start of the JavaScript:

```
fetch('products.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

- The `fetch()` function returns a promise.
- If this completes successfully, the function inside the first `.then()` block contains the response returned from the network.

- Inside this function we:

  - check that the server didn't return an error (such as `404 Not Found`). If it did, we throw the error.
  - call `json()` on the response. This will retrieve the data as a JSON object. We return the promise returned by `response.json()`.

- Next we pass a function into the `then()` method of that returned promise.
- This function will be passed an object containing the response data as JSON, which we pass into the `initialize()` function.
- This function which starts the process of displaying all the products in the user interface.

- To handle errors, we chain a `.catch()` block onto the end of the chain.
- This runs if the promise fails for some reason.
- Inside it, we include a function that is passed as a parameter, an `err` object.
- This `err` object can be used to report the nature of the error that has occurred, in this case we do it with a simple `console.log()`.

- However, a complete website would handle this error more gracefully by displaying a message on the user's screen and perhaps offering options to remedy the situation, but we don't need anything more than a simple `console.error()`.

- You can test the failure case yourself:

1. Make a local copy of the example files.
2. Run the code through a web server (as described above, in Serving your example from a server).
3. Modify the path to the file being fetched, to something like 'produc.json' (make sure it is misspelled).
4. Now load the index file in your browser (via `localhost:8000`) and look in your browser developer console. You'll see a message similar to "Fetch problem: HTTP error: 404".

- The second Fetch block can be found inside the `fetchBlob()` function:

```
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => showProduct(blob, product))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));
```

- This works in much the same way as the previous one, except that instead of using `json()`, we use `blob()`.
- In this case we want to return our response as an image file, and the data format we use for that is **Blob** (the term is an abbreviation of "Binary Large Object" and can basically be used to represent large file-like objects, such as images or video files).

- Once we've successfully received our blob, we pass it into our `showProduct()` function, which displays it.

## The XMLHttpRequest API

- Sometimes, especially in older code, you'll see another API called `XMLHttpRequest` (often abbreviated as "XHR") used to make HTTP requests.
- This predated Fetch, and was really the first API widely used to implement AJAX. We recommend you use Fetch if you can: it's a simpler API and has more features than `XMLHttpRequest`.
- We won't go through an example that uses XMLHttpRequest, but we will show you what the `XMLHttpRequest` version of our first can store request would look like:

```
const request = new XMLHttpRequest();

try {
  request.open('GET', 'products.json');

  request.responseType = 'json';

  request.addEventListener('load', () => initialize(request.response));
  request.addEventListener('error', () => console.error('XHR error'));

  request.send();

} catch (error) {
  console.error(`XHR error ${request.status}`);
}
```

- There are five stages to this:

  1. Create a new `XMLHttpRequest` object.
  2. Call its `open()` method to initialize it.
  3. Add an event listener to its `load` event, which fires when the response has completed successfully. In the listener we call `initialize()` with the data.
  4. Add an event listener to its `error` event, which fires when the request encounters an error.
  5. Send the request.

- We also have to wrap the whole thing in the `try...catch` block, to handle any errors thrown by `open()` or `send()`.

- Hopefully you think the Fetch API is an improvement over this. In particular, see how we have to handle errors in two different places.
