/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    renderBrands(data);
    })
  .catch(error => console.error(error));

const renderBrands = brandsData => {
  const outputContainer = document.getElementById("output");

  if (!outputContainer) {
    return;
  }

  outputContainer.innerHTML = "";

  brandsData.forEach(brand => {
    const brandContainer = document.createElement("div");
    brandContainer.classList.add("brand-container");

    const brandName = document.createElement("h1");
    brandName.classList.add("brand-name");
    brandName.textContent = brand.brand;

    const modelsList = document.createElement("ul");
    brand.models.forEach(model => {
      const modelName = document.createElement("li");
      modelName.classList.add("model-name");
      modelName.textContent = model;
      modelsList.append(modelName);
    });
    
    brandContainer.append(brandName, modelsList);
    outputContainer.append(brandContainer);
  });
};
