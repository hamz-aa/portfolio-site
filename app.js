
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

rightArrow.addEventListener("click", () => {
  leftSlider.style.position = "absolute";
  leftSlider.style.translate = "-150%";
  leftSlider.classList.replace("left-slider", "left-next");

  activeSlider.style.scale = "0.5";
  setTimeout(() => {
    activeSlider.removeAttribute("style");
    activeSlider.classList.replace("active-slider", "left-slider");
  }, 300);

  rightSlider.style.translate = "-25%";
  setTimeout(() => {
    rightSlider.classList.replace("right-slider", "active-slider");
    rightSlider.style.translate = "0";
  }, 300);

  right.style.position = "relative";
  right.style.translate = "0";
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

leftArrow.addEventListener("click", () => {
  rightSlider.style.position = "absolute";
  rightSlider.style.translate = "150%";
  rightSlider.classList.replace("right-slider", "right-next");

  activeSlider.style.scale = "0.5";
  setTimeout(() => {
    activeSlider.removeAttribute("style");
    activeSlider.classList.replace("active-slider", "right-slider");
  }, 300);

  leftSlider.style.translate = "25%";
  setTimeout(() => {
    leftSlider.classList.replace("left-slider", "active-slider");
    leftSlider.style.translate = "0";
  }, 300);

  left.style.position = "relative";
  left.style.translate = "0";
  setTimeout(() => {
    left.classList.replace("left-next", "left-slider");

    leftSlider = document.querySelector(".left-slider");
    rightSlider = document.querySelector(".right-slider");
    activeSlider = document.querySelector(".active-slider");

    right.style.display = "none";
    right = rightSlider.nextElementSibling;
    adjustRight();

    left = leftSlider.previousElementSibling;
    adjustLeft();
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
  if (left.classList.contains("right-next"))
    left.classList.remove("right-next");
  if (!left.classList.contains("left-next")) left.classList.add("left-next");
  left.style.display = "block";
  left.style.position = "absolute";
  left.style.translate = "none";
  left.style.translate = "-150%";
}

function adjustRight() {
  if (right.nodeName === "BUTTON") {
    const firstElement = projects.firstElementChild.nextElementSibling;
    projects.insertBefore(firstElement, right);
    right = firstElement;
  }

  if (right.classList.contains("left-slider"))
    left.classList.remove("left-slider");
  if (right.classList.contains("left-next"))
    right.classList.remove("left-next");
  if (!right.classList.contains("right-next"))
    right.classList.add("right-next");
  right.style.display = "block";
  right.style.position = "absolute";
  right.style.translate = "none";
  right.style.translate = "150%";
}

// navbar
// menu handler for hamburger menu

const menu = document.querySelectorAll("nav ul li a");

menu.forEach(btn => {
  btn.addEventListener('click', () => {
    const checkbox = document.querySelector('input[type=checkbox]');
    if(checkbox.checked){
      checkbox.checked = false;
    document.body.style.overflow = 'auto';
    }
  })
})

const checkbox = document.querySelector('input[type=checkbox]');

checkbox.addEventListener('click', () => {
  if(checkbox.checked) {
    document.body.style.overflow = 'hidden';
  }
  if(!checkbox.checked) {
    document.body.style.overflow = 'auto';
  }
})

// navbar
// name hacker effect

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const siteName = document.querySelector('.name');

const hackerEffect = () => {
  let iterations = 0

  const interval = setInterval(() => {
    siteName.innerText = siteName.innerText.split("")
      .map((letter, index) => {
        if(index < iterations) {
          return siteName.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

      if(iterations >= siteName.dataset.value.length){
        clearInterval(interval);
      }

      iterations += 1 / 3;
  }, 30)
}

hackerEffect();
siteName.addEventListener('mouseover', hackerEffect);
siteName.addEventListener('touchstart ', hackerEffect);

// home section
// typewriter effect 

let typed = new Typed(".text-1", {
  strings: ['MERN Stack Developer', 'Computer Scientist'],
  typeSpeed: 90,
  backSpeed: 90,
  loop: true
})

// intersection observer

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
  })
}, {
  threshold: 0.2,
  rootMargin: '-50px'
})

const sections = document.querySelectorAll('section:not(:first-of-type)');
sections.forEach(el => observer.observe(el));

// gsap animations

gsap.from(".gsap-ani-link", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  ease: Power2,
  opacity: 0,
}) 

gsap.from(".gsap-ani-block", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});