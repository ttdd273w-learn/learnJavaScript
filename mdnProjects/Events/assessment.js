// Task 1
// const btn = document.querySelector(".off");
// function changeBtn() {
//   if (btn.textContent == "Machine is on") {
//     btn.textContent = "Machine is off";
//   } else {
//     btn.textContent = "Machine is on";
//   }
// }

// btn.addEventListener("click", changeBtn);

// Task 2
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// function drawCircle(x, y, size) {
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.beginPath();
//   ctx.fillStyle = "black";
//   ctx.arc(x, y, size, 0, 2 * Math.PI);
//   ctx.fill();
// }

// let x = 50;
// let y = 50;
// const size = 30;

// drawCircle(x, y, size);

// // Add your code here
// canvas.addEventListener("keydown", (event) => {
//   if (event.key == "w") {
//     y--;
//   } else if (event.key == "a") {
//     x--;
//   } else if (event.key == "s") {
//     y++;
//   } else if (event.key == "d") {
//     x++;
//   }
//   drawCircle(x, y, size);
// });

// Task 3
const buttonBar = document.querySelector(".button-bar");

buttonBar.addEventListener("click", (event) => {
  const color = event.target.getAttribute("data-color");
  buttonBar.style.backgroundColor = color;
});
