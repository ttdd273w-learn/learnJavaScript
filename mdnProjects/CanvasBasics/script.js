const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

// Drawing images
const image = new Image();
image.src = "firefox.png";
image.addEventListener("load", () => ctx.drawImage(image, 20, 20));

// Drawing different text
// ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Canvas text", 50, 50);

// ctx.fillStyle = "red";
// ctx.font = "48px georgia";
// ctx.fillText("Canvas text", 50, 150);

// canvas.setAttribute("aria-label", "Canvas text");

// Drawing different paths

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);

// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// ctx.fill();

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();

// function degToRad(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// Drawing different rectangles

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 150);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(75, 75, 100, 100);

// ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
// ctx.fillRect(25, 100, 175, 50);

// ctx.strokeStyle = "rgb(255, 255, 255)";
// ctx.lineWidth = 5;
// ctx.strokeRect(25, 25, 175, 200);
