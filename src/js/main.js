const menu = document.querySelector(".navigation__menu");
const hamburgerBtn = document.querySelector(".hamburger");
const submenu = document.querySelector(".navigation__submenu");
const menuItemArrow = document.querySelector(".navigation__nav-arrow-box");
const menuBackBox = document.querySelector(".navigation__submenuback");
const menuBackArrow = document.querySelector(".navigation__submenuback-arrow");
const overlay = document.querySelector(".overlay");

const addOverlay = params => {
  overlay.classList.add("overlay--active");
};

const removeOverlay = params => {
  overlay.classList.remove("overlay--active");
};

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

if (window.innerWidth > 992) {
  const submenuInner = document.querySelector(".navigation__submenu-inner");
  const submenuElements = document.querySelectorAll(
    ".navigation__submenu-item"
  );
  let menuTimer = !1;

  menuItemArrow.addEventListener("mouseover", () => {
    if (menuTimer) {
      clearTimeout(menuTimer);
    }
    submenu.classList.add("navigation__submenu--hover");
    addOverlay();
  });

  menuItemArrow.addEventListener("mouseout", () => {
    menuTimer = setTimeout(() => {
      submenu.classList.remove("navigation__submenu--hover");
      removeOverlay();
    }, 400);
  });

  submenuInner.addEventListener("mouseout", () => {
    if (menuTimer) {
      clearTimeout(menuTimer);
    }
    submenu.classList.add("navigation__submenu--hover");
    addOverlay();
  });

  submenuInner.addEventListener("mouseout", () => {
    menuTimer = setTimeout(() => {
      submenu.classList.remove("navigation__submenu--hover");
      removeOverlay();
    }, 400);
  });

  submenuElements.forEach(el => {
    el.addEventListener("mouseover", () => {
      if (menuTimer) {
        clearTimeout(menuTimer);
      }
      submenu.classList.add("navigation__submenu--hover");
      addOverlay();
    });
  });
}
