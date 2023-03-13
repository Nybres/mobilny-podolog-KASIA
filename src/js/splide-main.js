document.addEventListener("DOMContentLoaded", function () {
  var offert = new Splide(".offert-slider", {
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
  offert.mount();

  var testimonials = new Splide(".testimonials-slider", {
    classes: {
      pagination: "splide__pagination testimonials__pagination",
      page: "splide__pagination__page testimonials__page",
    },
    type: "loop",
    perPage: 1,
    gap: 16,
    padding: {
      right: "32px",
    },
    arrows: false,
    // start: 2,
    mediaQuery: "min",
    breakpoints: {
      576: {
        perPage: 2,
      },
      992: {
        perPage: 3,
        gap: 36,
        padding: {
          right: "0px",
        },
      },
      // 1200: {
      //   perPage: 3,
      //   gap: 24,
      //   padding: {
      //     right: "0px",
      //   },
      // },
    },
  });
  testimonials.mount();
});
