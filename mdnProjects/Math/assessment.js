// Task 1
// let finalResult;

// let evenOddResult;

// // Add your code here
// let x1, x2, x3, x4;
// x1 = 22, x2 = 2, x3 = 5, x4 = 3;
// let sum1 = x1 + x2;
// let diff1 = x3 - x4;
// finalResult = sum1 * diff1;
// evenOddResult = finalResult % 2;

// // Don't edit the code below here!

// section.innerHTML = ' ';
// const para1 = document.createElement('p');
// const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
// para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
// const para2 = document.createElement('p');
// const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
// para2.textContent = evenOddResultCheck;

// section.appendChild(para1);
// section.appendChild(para2);

// Task 2
// // Final result should be 10.42
// // Add/update your code here

// let result = 7 + 13 / 9 + 7;
// let result2 = 100 / 2 * 6;
// result *= result2;
// finalResult = result.toFixed(2);
// finalNumber = Number(result);

// // Don't edit the code below here!

// section.innerHTML = ' ';
// const para1 = document.createElement('p');
// para1.textContent = `Your finalResult is ${ finalResult }`;
// const para2 = document.createElement('p');
// const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
// para2.textContent = finalNumberCheck;

// section.appendChild(para1);
// section.appendChild(para2);

// Task 3
// // Statement 1: The elephant weighs less than the mouse
// const eleWeight = 1000;
// const mouseWeight = 2;

// // Statement 2: The Ostrich is taller than the duck
// const ostrichHeight = 2;
// const duckHeight = 0.3;

// // Statement 3: The two passwords match
// const pwd1 = 'stromboli';
// const pwd2 = 'stROmBoLi';

// // Add your code here
// let weightComparison = eleWeight > mouseWeight;
// let heightComparison = ostrichHeight > duckHeight;
// let pwdMatch = pwd1 != pwd2;

// // Don't edit the code below here!

// section.innerHTML = ' ';
// const para1 = document.createElement('p');
// const para2 = document.createElement('p');
// const para3 = document.createElement('p');

// const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
// const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
// const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

// para1.textContent = weightTest;
// section.appendChild(para1);
// para2.textContent = heightTest;
// section.appendChild(para2);
// para3.textContent = pwdTest;
// section.appendChild(para3);
