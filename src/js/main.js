const menu = document.querySelector(".navigation__menu");
const hamburgerBtn = document.querySelector(".hamburger");
const submenu = document.querySelector(".navigation__submenu");
const menuItemArrow = document.querySelector(".navigation__nav-arrow-box");
const menuBackBox = document.querySelector(".navigation__submenuback");
const menuBackArrow = document.querySelector(".navigation__submenuback-arrow");

const handleNav = params => {
  menu.classList.toggle("navigation__menu--active");
  hamburgerBtn.classList.toggle("hamburger--active");
};

const handleSubmenu = params => {
  submenu.classList.add("navigation__submenu--active");
  menuBackBox.classList.add("navigation__submenuback--active");
};

const handleSubemnuBack = params => {
  submenu.classList.remove("navigation__submenu--active");
  menuBackBox.classList.remove("navigation__submenuback--active");
};

hamburgerBtn.addEventListener("click", () => {
  handleNav();
  handleSubemnuBack();
});

menuItemArrow.addEventListener("click", () => {
  handleSubmenu();
});

menuBackArrow.addEventListener("click", () => {
  handleSubemnuBack();
});
