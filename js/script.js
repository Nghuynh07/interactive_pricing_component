const slider = document.querySelector(".section-2-range");
const price = document.querySelector(".section-2-price span");
const views = document.querySelector(".section-2-100k");
const sliderBG = document.querySelector(".slider-bg");
const mainContentContainer = document.querySelector(".section-2-billing-infos");
console.log(slider);
const getPrice = (element, amount) => {
  const isTrue = document
    .querySelector(".section-2-btn")
    .classList.contains("change");

  if (isTrue) return (element.textContent = `$${amount * 1 * 0.75}`);
  return (element.textContent = `$${amount * 1}`);
};

const displayPricesAndViews = () => {
  if (slider.valueAsNumber === 0) {
    getPrice(price, 0);
    views.textContent = `0 pageviews`;
  }
  if (slider.valueAsNumber === 20) {
    getPrice(price, 8);
    views.textContent = `10K pageviews `;
  }
  if (slider.valueAsNumber === 40) {
    getPrice(price, 12);
    views.textContent = `50K pageviews`;
  }
  if (slider.valueAsNumber === 60) {
    getPrice(price, 16);

    views.textContent = `100K pageviews`;
  }
  if (slider.valueAsNumber === 80) {
    getPrice(price, 24);

    views.textContent = `500k pageviews`;
  }
  if (slider.valueAsNumber === 100) {
    getPrice(price, 36);
    views.textContent = `1M pageviews`;
  }
};

const toggleDiscount = (e) => {
  if (e.target.classList.contains("section-2-btn")) {
    e.target.classList.toggle("change");
  }
};

displayPricesAndViews();
slider.addEventListener("input", displayPricesAndViews);
mainContentContainer.addEventListener("click", toggleDiscount);
