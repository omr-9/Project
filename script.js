let valueOfProgress = document.querySelectorAll(".value");
valueOfProgress.forEach((e) => {
  e.style.width = e.dataset.width;
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 0) {
    nav.setAttribute(
      "style",
      "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));"
    );
  } else {
    nav.setAttribute("style", "filter: none;");
  }
});

// slider
const testimonials = document.querySelectorAll(".testimonial");
const paginationDots = document.querySelectorAll(".pagination span");
let currentIndex = 0;
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
  paginationDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
}

function goToTestimonial(index) {
  currentIndex = index;
  showTestimonial(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextTestimonial, 5000);

// Pagination dot click event
paginationDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    goToTestimonial(index);
  });
});

// Show the first testimonial initially
showTestimonial(currentIndex);

// toggle menu

const toggle = document.querySelector(".toggleMenu");
const dropMenu = document.querySelector(".dropMenu");

toggle.addEventListener("click", () => {
  dropMenu.classList.toggle("open");
});
