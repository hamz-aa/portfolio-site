// projects.scss
// slider javaScript

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const activeSlider = document.querySelector(".active-slider");

console.log(leftSlider);

leftArrow.addEventListener("click", () => {
  leftSlider.classList.add("left-un-active");
  activeSlider.classList.add("center-to-left");
  activeSlider.classList.replace("active-slider", "left-slider");
  rightSlider.classList.replace("right-slider", "active-slider");
});
