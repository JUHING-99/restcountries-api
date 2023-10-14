const cardTemplate = function (image, country) {
  return `<div class="card">
              <img id="flag-image" src="${image}" alt="flag" />
              <h1 class="center">${country}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(elements => {

      let cards = ""

    for (let i = 0; i < elements.length; i++) {
     cards+= cardTemplate(elements[i].flags.png, elements[i].name.common)
    }
    countriesNode.innerHTML = cards
    });


