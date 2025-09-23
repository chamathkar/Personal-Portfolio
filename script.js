function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var date = new Date().getFullYear();
document.getElementById("year").innerHTML =
  "Copyright &#169; " + date + " Chamathkar. All Rights Reserved";

const fadeElements = document.querySelectorAll(".fade-up");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("visible"); // Remove first to replay
      void entry.target.offsetWidth; // Force reflow
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, observerOptions);

fadeElements.forEach((el) => observer.observe(el));

const img = document.getElementById("toggleImage");

  img.addEventListener("click", () => {
    img.src = img.src.includes("image1.jpg") ? "./assets/image2.jpg" : "./assets/image1.jpg";
  });