document.addEventListener("scroll", () => {
  const navbar = ocument.querySelector(".nav");

  if (window.scrollY >= 70) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
