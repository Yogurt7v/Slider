const options = {
  accessibility: true,
  prevNextButton: true,
  pageDots: true,
  setGallerySize: false,
  // draggable: true,
  // freeScroll: true,
  // wrapAround: true,
  // fullscreen: true,

  arrowShape: {
    x0: 1,
    x1: 58,
    y1: 62,
    x2: 55,
    y2: 48,
    x3: 18,
  },
};

function setBgPosition(slide, index) {
  const x = -(slide.target + flkty.x) / 3;
  slides[index].style.backgroundPositin = `${x}px`;
}

const carousel = document.querySelector(`[carousel]`);
const slides = Array.from(document.getElementsByClassName(`carousel-cell`));
const flkty = new Flickity(carousel, options);

flkty.on(`scroll`, () => {
  flkty.slides.forEach(setBgPosition);
});
