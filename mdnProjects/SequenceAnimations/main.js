// defined animation for alice
// simply rotates the image and shrinks it
const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// this is WebAnimationAPI
// this line animates the first image
firstImage = alice1.animate(aliceTumbling, aliceTiming);

// animate() method returns an Animation object
// which has a finished property, so we can use this promise to know when we should start animating the next image

// using callbacks
// function sequence() {
//   alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//     alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
//       alice3.animate(aliceTumbling, aliceTiming);
//     });
//   });
// }
// sequence();

// using promise chain
// firstImage
//   .then((response) => {
//     alice2.animate(aliceTumbling, aliceTiming).finished;
//   })
//   .then((response) => {
//     alice3.animate(aliceTumbling, aliceTiming).finished;
//   });

firstImage.finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming));

// // using async await
// async function sequence() {
//   try {
//     await alice1.animate(aliceTumbling, aliceTiming).finished;
//     await alice2.animate(aliceTumbling, aliceTiming).finished;
//     alice3.animate(aliceTumbling, aliceTiming);
//   } catch (error) {
//     console.error(`Could not play the animation: ${error}`);
//   }
// }
