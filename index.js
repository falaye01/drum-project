const highestLoop = document.querySelectorAll(".drum")

for (let i = 0; i < highestLoop.length; i++){
  highestLoop[i].addEventListener("click", function (){
    
    const buttonClick = this.innerHTML
    makeSound(buttonClick)
    animateButton(buttonClick)

  })
}

// event that listen to keyboard

document.addEventListener("keypress", function(event){
  makeSound(event.key)
  animateButton(event.key)
})

function makeSound(key){
  switch (key) {
    case "w":
      const crash = new Audio("./sounds/tom-3.mp3")
      crash.play()
      break;
  case "a":
    const kick = new Audio("./sounds/kick-bass.mp3 ")
    kick.play()
    break;
    case "s":
    const snare = new Audio("./sounds/tom-2.mp3")
    snare.play()
    break;
    case "d":
    tom = new Audio("./sounds/tom-1.mp3")
    tom.play()
    break;
    case "j":
    const tom2 = new Audio("./sounds/snare.mp3")
    tom2.play()
    break;
    case "k":
    const tom3 = new Audio("./sounds/crash.mp3")
    tom3.play()
    break;
    case "l":
    const tom4 = new Audio("./sounds/tom-4.mp3")
    tom4.play()
  
    default: {
     console.log(buttonClick)
    }
      break;
  }
}
function animateButton(currentkey){
  const activeButton = document.querySelector("." + currentkey)
  activeButton.classList.add("pressed")

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100)
}














// higher order function

function add(numb1, numb2){
  return numb1 + numb2
}
function multiply(numb1, numb2){
  return numb1 * numb2
}
function substract(numb1, numb2){
  return numb1 - numb2
}
function divide(numb1,numb2){
return numb1 / numb2
}
function calculator(numb1, numb2, operator){
return operator(numb1, numb2)
}
calculator(4,5, add)




// understanding callback

function addAnotherEventListener(typeOfEvent, callback){
  // detect some code here

  const eventThatHappen = {
    eventType: "keypress",
    key: "p",
    durationOfEvent: 2
  }
if (eventThatHappen.eventType === typeOfEvent){
  callback(eventThatHappen)
}

}
addAnotherEventListener("keypress", function(event){
  console.log(event)
})
