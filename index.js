/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

// function greet(time) {
//   if (time < "12:00") {
//     return "Good Morning"
//   } else if (time > "17:00") {
//     return "Good Evening"
//   } else {
//     return "Good Afternoon"
//   }
// }

function greet(time) {
  const hour = parseInt(time, 10);
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(message) {
  const input = document.getElementById('greeting');
  input.innerText = message
}
/* Write your implementation of displayMessage() */
