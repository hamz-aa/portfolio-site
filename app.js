// projects.scss
// slider javaScript

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const activeSlider = document.querySelector(".active-slider");
const rightNext = document.querySelector(".right-next");

console.log(leftSlider);

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

  rightNext.style.position = "relative";
  rightNext.style.transform = "translateX(0)";
  setTimeout(() => {
    activeSlider.classList.remove("right-next");
  }, 300);
});
