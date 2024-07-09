const createInfoElement = (labelname,value) => {
    const infoElement = document.createElement("div");
    const labelElement = document.createElement("strong");
    labelElement.innerText = labelname;
    const valueElement = document.createElement("span");
    valueElement.innerText = value

    infoElement.appendChild(labelElement)
    infoElement.appendChild(valueElement)

    return infoElement
}

const createFlagImg = (country) => { 
    const imgContainerElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = country.flagUrl
    imgContainerElement.appendChild(imgElement)
    return imgContainerElement;
}

const createcountry = (country) => {
    const countryelement = document.createElement("li");
    countryelement.appendChild(createFlagImg(country));
    const infoContainerElement = document.createElement('div');
    infoContainerElement.classList.add('info-container')


    const countrynameElement = document.createElement("strong");
    countrynameElement.innerText = country.name;
    countrynameElement.classList.add('country-name')
    infoContainerElement.appendChild(countrynameElement)
    infoContainerElement.appendChild(createInfoElement("Population: ", country.population))
    infoContainerElement.appendChild(createInfoElement("Region: ", country.region))
    infoContainerElement.appendChild(createInfoElement("Capital: ", country.capital))
    countryelement.appendChild(infoContainerElement)

    return countryelement
}

const createlistelement = (countries) => {
    const listelement = document.createElement("ul");
    countries.forEach(country => {
        listelement.appendChild(createcountry(country))
    });
    return listelement
}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createlistelement(countries))
    console.log(countries)
}