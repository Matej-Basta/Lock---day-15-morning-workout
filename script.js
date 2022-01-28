//accessing the padlock image and the message
const padlock = document.querySelector(".padlock");
const text = document.querySelector(".text");

//adding a listener that shows the message when the mouse enters the image
padlock.addEventListener("mouseenter", () => {
  text.className = "text.text--visible";
});

//adding a listener that hides the message when the mouse leaves - but first it checks whether the lock is active or not
padlock.addEventListener("mouseleave", () => {
  if (padlock.getAttribute("style") !== "opacity: 0.5;") {
    text.className = "text";
  }
});

//adding a listener that decreases the opacity of the padlock
padlock.addEventListener("click", () => {
  if (padlock.getAttribute("style") === "opacity: 0.5;") {
    padlock.style.opacity = 1;
  } else {
    padlock.setAttribute("style", "opacity: 0.5;");
  }
});
