const container = document.querySelector(`.swiper`)

container.addEventListener(`click`, function (evt) {
  if (evt.target.classList.contains(`swiper__button`)) {
      evt.target.classList.add(`swiper-button-animate`);
      setTimeout(function() {
        evt.target.classList.remove(`swiper-button-animate`);
    }, 650);
  }
});
