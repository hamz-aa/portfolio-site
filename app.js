// projects.scss
// slider javaScript

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let leftSlider = document.querySelector(".left-slider");
let rightSlider = document.querySelector(".right-slider");
let activeSlider = document.querySelector(".active-slider");
const projects = document.querySelector(".projects-wrapper");

let left = leftSlider.previousElementSibling;
let right = rightSlider.nextElementSibling;

adjustLeft();
adjustRight();

leftArrow.addEventListener("click", () => {
  leftSlider.style.position = "absolute";
  leftSlider.style.translate = "-150%";
  leftSlider.classList.replace("left-slider", "left-next");

  activeSlider.classList.add("center-to-left");
  setTimeout(() => {
    activeSlider.classList.remove("center-to-left");
    activeSlider.classList.replace("active-slider", "left-slider");
  }, 300);

  rightSlider.style.translate = "-10%";
  setTimeout(() => {
    rightSlider.classList.replace("right-slider", "active-slider");
    rightSlider.style.translate = "0";
  }, 300);

  right.style.position = "relative";
  right.style.transform = "translateX(0)";
  setTimeout(() => {
    right.classList.replace("right-next", "right-slider");

    leftSlider = document.querySelector(".left-slider");
    rightSlider = document.querySelector(".right-slider");
    activeSlider = document.querySelector(".active-slider");

    left.style.display = "none";
    left = leftSlider.previousElementSibling;
    adjustLeft();

    right = rightSlider.nextElementSibling;
    adjustRight();
  }, 300);
});

function adjustLeft() {
  if (left.nodeName === "BUTTON") {
    const lastElement = projects.lastElementChild.previousElementSibling;
    projects.insertBefore(lastElement, leftSlider);
    left = lastElement;
  }

  if (left.classList.contains("right-slider"))
    left.classList.remove("right-slider");
  if (!left.classList.contains("left-next")) left.classList.add("left-next");
  left.style.display = "block";
  left.style.position = "absolute";
  left.style.transform = "translateX(-150%)";
}

function adjustRight() {
  if (right.nodeName === "BUTTON") {
    const firstElement = projects.firstElementChild.nextElementSibling;
    projects.insertBefore(firstElement, right);
    right = firstElement;
  }

  if (right.classList.contains("left-slider"))
    left.classList.remove("left-slider");
  if (!right.classList.contains("right-next"))
    right.classList.add("right-next");
  right.style.display = "block";
  right.style.position = "absolute";
  right.style.transform = "translateX(150%)";
}
