document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".offert-slider", {
    classes: {
      pagination: "splide__pagination card__pagination",
      page: "splide__pagination__page card__page",
    },
    type: "loop",
    perPage: 1,
    padding: {
      right: "36px",
    },
    gap: 18,
    arrows: false,
    start: 2,
    mediaQuery: "min",
    breakpoints: {
      576: {
        perPage: 2,
      },
      768: {
        width: "520px",
        perPage: 1,
        gap: 24,
        padding: {
          right: "46px",
        },
      },
      992: {
        width: "unset",
        perPage: 2,
        gap: 24,
        padding: {
          right: "42px",
        },
      },
      1200: {
        perPage: 3,
        gap: 24,
        padding: {
          right: "0px",
        },
      },
    },
  });
  splide.mount();
});
