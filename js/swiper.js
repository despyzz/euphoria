const swiperFeedback = new Swiper('.feedback__swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 40,
  breakpoints: {
    481: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".feedbackNext",
    prevEl: ".feedbackPrev",
  },
});

const swiperLimelight = new Swiper('.limelight__swiper', {
  slidesPerView: "auto",
  spaceBetween: 36,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: ".limelightNext",
    prevEl: ".limelightPrev",
  },
  scrollbar: {
    el: ".limelightScrollbar",
  },
});

const swiperSimilar = new Swiper('.similar__swiper', {
  slidesPerView: "auto",
  spaceBetween: 36,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: ".similarNext",
    prevEl: ".similarPrev",
  },
  scrollbar: {
    el: ".similarScrollbar",
  },
});

const swiperCategoryMen = new Swiper('.categoryMen__swiper', {
  slidesPerView: "auto",
  spaceBetween: 36,
  loop: false,
  navigation: {
    nextEl: ".menCategoryNext",
    prevEl: ".menCategoryPrev",
  },
  scrollbar: {
    el: ".categoryMenScrollbar",
  },
});

const swiperCategoryWomen = new Swiper('.categoryWomen__swiper', {
  slidesPerView: "auto",
  spaceBetween: 36,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: ".womenCategoryNext",
    prevEl: ".womenCategoryPrev",
  },
  scrollbar: {
    el: ".categoryWomenScrollbar",
  },
});

const swiperBanner = new Swiper(".banner__swiper", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperNewArrival = new Swiper(".newarrival__swiper", {
  direction: 'horizontal',
  spaceBetween: 38,
  loop: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".newarrivalNext",
    prevEl: ".newarrivalPrev",
  },
  scrollbar: {
    el: ".newArrivalScrollbar",
  },
});

const swiperGalleryThumbs = new Swiper(".gallery-thumbs", {
  centeredSlides: true,
  // centeredSlidesBounds: true,
  direction: "horizontal",
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  breakpoints: {
    481: {
      direction: "vertical",
      slidesPerView: 3
    }
  }
});

const swiperGalleryTop = new Swiper(".gallery-top", {
  direction: "horizontal",
  spaceBetween: 10,
  thumbs: {
    swiper: swiperGalleryThumbs
  },
  navigation: {
    nextEl: ".thumbsNext",
    prevEl: ".thumbsPrev",
  }
});

swiperGalleryTop.on("slideChangeTransitionStart", function () {
  swiperGalleryThumbs.slideTo(swiperGalleryTop.activeIndex);
});

swiperGalleryThumbs.on("transitionStart", function () {
  swiperGalleryTop.slideTo(swiperGalleryThumbs.activeIndex);
});

