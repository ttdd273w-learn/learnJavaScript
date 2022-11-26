const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = [
  "human eye",
  "painting",
  "flowers",
  "egpytian wall painting",
  "butterfly",
];

/* Looping through images */
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${images[i]}`);
  newImage.setAttribute("alt", altText[i]);
  newImage.addEventListener("click", (event) => {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.altText;
  });
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    // overlay.setAttribute("background-color", "rgba(0,0,0,0)");
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
