const cardTemplate = function (image, country) {
  return `<div class="card">
              <img id="flag-image" src="${image}" alt="flag" />
              <h2 class="center">${country}</h2>
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




    document.addEventListener("DOMContentLoaded", function() {     
      let buscador = document.createElement("form");      
      buscador.id = "buscador";
      buscador.innerHTML = `<label for="region">Filter by continent</label>
                              <input type="text" id="region" name="region" placeholder="Continent"><br>
                              <button type="submit">Submit</button>`;

      document.querySelector("header").appendChild(buscador);   
      
 
  
      document.getElementById("buscador").addEventListener("submit", function(event) {   

          event.preventDefault();

          let region = event.target.region.value;  
          
          fetch(`https://restcountries.com/v3.1/region/${region}`)
          .then(res => res.json())
          .then(countries => {
        
              let tarjetas = ""
        
            for (let i = 0; i < countries.length; i++) {
             tarjetas+= cardTemplate(countries[i].flags.png, countries[i].name.common)
            }
            countriesNode.innerHTML = tarjetas
            });


        })
        
      })