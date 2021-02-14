'use strict';

(function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    loopFillGroupWithBlank: true,
    effect: 'fade',
    pagination: {
      el: '.swiper__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
    },
  });
})();
