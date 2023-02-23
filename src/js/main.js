const hamburgerBtn = document.querySelector(".hamburger");
// const ctaBtn = document.querySelector(".navigation__cta");
const menu = document.querySelector(".navigation__menu");

const handleNav = params => {
  menu.classList.toggle("navigation__menu--active");
};

hamburgerBtn.addEventListener("click", () => {
  handleNav();
});
