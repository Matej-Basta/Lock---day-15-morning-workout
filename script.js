//accessing the padlock image and the message
const padlock = document.querySelector(".padlock");
const text = document.querySelector(".text");

//function that changes the status of the text to visible and invisible
const toggleTextVisibility = (on) => {
  if (on) {
    text.className = "text.text--visible";
  }
  //checking whether the lock is active and if not, it hides the text
  else {
    if (padlock.getAttribute("style") !== "opacity: 0.5;") {
      text.className = "text";
    }
  }
};

//function that changes the opacity of the padlock
const changingOpacityOfTheButton = () => {
  if (padlock.getAttribute("style") === "opacity: 0.5;") {
    padlock.style.opacity = 1;
  } else {
    padlock.setAttribute("style", "opacity: 0.5;");
  }
};

//adding a listener that shows the message when the mouse enters the image
padlock.addEventListener("mouseenter", () => {
  toggleTextVisibility(true);
});

//adding a listener that hides the message when the mouse leaves - but first it checks whether the lock is active or not
padlock.addEventListener("mouseleave", () => {
  toggleTextVisibility(false);
});

//adding a listener that decreases the opacity of the padlock
padlock.addEventListener("click", () => {
  changingOpacityOfTheButton();
});
