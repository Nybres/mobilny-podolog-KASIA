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
        width: "400px",
        perPage: 1,
        gap: 24,
        padding: {
          right: "94px",
        },
      },
    },
  });
  splide.mount();
});
