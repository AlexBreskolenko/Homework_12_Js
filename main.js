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

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getData(url);
  data.forEach((element) => {
    const sectonCards = document.querySelector(".section__cards");
    sectonCards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">
          <img src= ${element.img} />
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
});
