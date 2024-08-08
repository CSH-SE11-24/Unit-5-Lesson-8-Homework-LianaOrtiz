console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let button1 = document.querySelector("#buttonOne")

// Select the first p tag under that button
let firstP = document.querySelector("#textOne")

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"

button1.addEventListener("click", function(event) {
  firstP.textContent = "You guessed wrong"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags

let button2 = document.querySelector("#buttonTwo")

let secondP = document.querySelector("#textTwo")




// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"

button2.addEventListener("click", function(event) {
  secondP.textContent = "You guessed right!"
})

// Task 3: Dog image flow
// Select the dog image

let dogImage = document.querySelector("#dog")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click

dogImage.addEventListener("mouseover", function(event) {
  dogImage.src = "post-boop.png"
})



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this

dogImage.addEventListener("mouseout", function(event) {
  dogImage.src = "pre-boop.png"
})


// Task 4: Secret code flow
// Select the input

let input = document.querySelector("#code")

// Add an event listener to the input such that when a key is pressed, you console log the value

input.addEventListener("keypress", (event) => {
  console.log(input.value)

  // Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)
  if (input.value === "raccoon") {
    let raccoonDiv = document.querySelector("#result")
    raccoonDiv.innerHTML += `<img src="raccoon.jpg" id="raccoon">`
  }
})