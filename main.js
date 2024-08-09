const url = "./data.json";

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

const sectionOneCards = document.querySelector(".section-one__cards");
const sectionTwoBasket = document.querySelector(".section-two");

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getData(url);
  data.forEach((element) => {
    sectionOneCards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">
          <img class="cards__img" src= ${element.img} />
          <button id=${element.id} class="button__pop-up" href="#"><img id=${element.id}   class=""button__img src=${element.iconBacket} />${element.popUpText}</button>
          <div class="cards__content">
            <h3 class="cards-content__heading">${element.heading}</h3>
            <p class="cards-content__text">
              ${element.text}
            </p>
            <span class="cards-content__price">${element.price}</span>
          </div>
        </div>`
    );
  });
  // Добавление при нажатии на кнопку
  const btnEll = document.querySelectorAll(".button__pop-up");
  btnEll.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      sectionTwoBasket.insertAdjacentHTML(
        "beforeend",
        `<div class="section-two__basket"><img class="basket__img" src=${
          data[e.target.id - 1].img
        }><div class="basket__content"> <img class="basket__icon-close" src=./img/icon-close.svg> <h3 class="basket-content__heading">${
          data[e.target.id - 1].heading
        }</h3>
            <p class="basket-content__text">
              ${data[e.target.id - 1].text}
            </p>
            <span class="basket-content__price">${
              data[e.target.id - 1].price
            }</span></div></div>`
      );
    });
  });
  // Удоление с корзины
  sectionTwoBasket.addEventListener("click", (e) => {
    if (e.target.closest(".basket__icon-close")) {
      const item = e.target.closest(".section-two__basket");
      if (item) {
        item.remove();
      }
    }
  });
});
