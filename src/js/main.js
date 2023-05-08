const menu = document.querySelector(".navigation__menu");
const hamburgerBtn = document.querySelector(".hamburger");
const submenu = document.querySelector(".navigation__submenu");
const menuItemArrow = document.querySelector(".navigation__nav-arrow-box");
const submenuChevron = document.querySelector(".navigation__nav-chevron");
const menuBackBox = document.querySelector(".navigation__submenuback");
const menuBackArrow = document.querySelector(".navigation__submenuback-arrow");
const overlay = document.querySelector(".overlay");

const addOverlay = params => {
  overlay.classList.add("overlay--active");
};

const removeOverlay = params => {
  overlay.classList.remove("overlay--active");
};

const addRotateChevron = params => {
  submenuChevron.classList.add("navigation__nav-chevron--active");
};

const removeRotateChevron = params => {
  submenuChevron.classList.remove("navigation__nav-chevron--active");
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
    addRotateChevron();
  });

  menuItemArrow.addEventListener("mouseout", () => {
    menuTimer = setTimeout(() => {
      submenu.classList.remove("navigation__submenu--hover");
      removeOverlay();
      removeRotateChevron();
    }, 400);
  });

  submenuInner.addEventListener("mouseout", e => {
    if (menuTimer) {
      clearTimeout(menuTimer);
    }
    submenu.classList.add("navigation__submenu--hover");
    addOverlay();
    addRotateChevron();
  });

  submenuInner.addEventListener("mouseout", e => {
    menuTimer = setTimeout(() => {
      submenu.classList.remove("navigation__submenu--hover");
      removeOverlay();
      removeRotateChevron();
    }, 400);
  });

  // subemnuNav.addEventListener("mouseout", e => {
  //   if (menuTimer) {
  //     clearTimeout(menuTimer);
  //   }
  //   submenu.classList.add("navigation__submenu--hover");
  //   addOverlay();
  // });

  // subemnuNav.addEventListener("mouseout", e => {
  //   menuTimer = setTimeout(() => {
  //     submenu.classList.remove("navigation__submenu--hover");
  //     removeOverlay();
  //   }, 400);
  // });

  submenuElements.forEach(el => {
    el.addEventListener("mouseover", () => {
      if (menuTimer) {
        clearTimeout(menuTimer);
      }
      submenu.classList.add("navigation__submenu--hover");
      addOverlay();
      addRotateChevron();
    });
  });
}

//faq
const faqContainer = document.querySelector(".faq__container");
if (faqContainer) {
  faqContainer.addEventListener("click", e => {
    const box = e.target.closest(".faq__box");
    const boxQuestion = box.querySelector(".faq__box-question");
    const boxAnswer = box.querySelector(".faq__box-answer");

    box.classList.toggle("faq__box--active");
    boxQuestion.classList.toggle("faq__box-question--active");
    boxAnswer.classList.toggle("faq__box-answer--active");
  });
}

//scroll
const scrollArrow = document.querySelector(".js-scroll");

const scrollUp = params => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

scrollArrow.addEventListener("click", scrollUp);

const checkUrl = element => {
  const url = new URL(window.location);
  const lastSlashIndex = url.href.lastIndexOf("/");
  const newUrl = url.href.substring(0, lastSlashIndex);
  return newUrl;
};
// Seo links
const seoLinks = document.querySelectorAll(".seo-link");
if (seoLinks) {
  const currentUrl = checkUrl();
  seoLinks.forEach(link => {
    const linkUrl = link.getAttribute("data-url");
    if (linkUrl) {
      link.addEventListener("click", e => {
        window.location.href = currentUrl + linkUrl;
      });
      link.addEventListener("mousedown", e => {
        if (e.which === 2) {
          window.open(currentUrl + linkUrl, "_blank");
        }
      });
    }
  });
}

//counter
const handleCounter = params => {
  const counterElements = document.querySelectorAll(".js-counter");
  if (counterElements) {
    counterElements.forEach(element => {
      const maxNumber = element.getAttribute("data-max");
      let counter = 0;
      element.textContent = "0";
      const interval = setInterval(() => {
        if (counter <= maxNumber) {
          element.textContent = counter++;
        } else {
          clearInterval(interval);
          const span = document.createElement("span");
          span.classList.add("counter-plus");
          element.appendChild(span);
          element.classList.add("counter-plus");
          span.textContent = "+";
        }
      }, 5);
    });
  }
};

const counterSection = document.querySelector(".counter").offsetTop;
if (counterSection) {
  let canRunCounter = true;
  window.addEventListener("scroll", e => {
    const windowScroll = window.scrollY || window.pageYOffset;
    if (counterSection <= windowScroll + 500) {
      if (canRunCounter) {
        handleCounter();
        canRunCounter = false;
      }
    }
  });
}
