let btn = document.querySelectorAll("button");

btn.forEach((eve) => {
  eve.addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });

  eve.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
});

function makeSound(btn) {
  switch (btn) {
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(btn);
      break;
  }
}

function buttonAnimation(curr) {
    let activeButton = document.querySelector("." + curr); 
    activeButton.classList.add("class", "pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
        
    }, 80);

}
