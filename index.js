import { renderCountriesList } from "./utilities.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;
let query = "";
let region = "";


fetch(API_URL_ALL)
.then((res) => res.json())
.then((countriesraw) => {
  
   countries = countriesraw.map(country => {
   return {
      capital : country.capital && country.capital[0],
      population : country.population ,
      name: country.name.common ,
      region: country.region ,
      flagUrl: country.flags.png ,
   }
})
renderCountriesList(countries);
}
)


const filterDataAndRenderCountriesList = () => {
   const filteredCountries = countries.filter((country) => {
       return (
           country.name.toLowerCase().includes(query) &&
           (!region || country.region === region)
       );
   });

   renderCountriesList(filteredCountries);
};

document.querySelector("#query").addEventListener("input", (e) => {
   query = e.target.value.toLowerCase().trim();
   filterDataAndRenderCountriesList();
});

document.querySelector("#region").addEventListener("change", (e) => {
   region = e.target.value;
   filterDataAndRenderCountriesList();
});


document.querySelector('#Theme').addEventListener('click', () =>{
   document.documentElement.classList.toggle('Darktheme')
   let Theme = document.querySelector('#Theme')
  Theme.textContent === 'Dark theme' ? Theme.textContent = 'Light theme' : Theme.textContent = 'Dark theme';
  
})