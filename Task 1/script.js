/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const inputKg = document.getElementById("search");
const form = document.querySelector("form");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const svarai = ((inputKg.value)*2.2046).toFixed(2);
    const gramai = ((inputKg.value)/0.001).toFixed(2);
    const uncijos = ((inputKg.value)*35.274).toFixed(2);

    output.innerHTML = `<div>Svarai: ${svarai}(lb)</div><div>Gramai: ${gramai}(g)</div><div>Uncijos: ${uncijos}(oz)</div>`;
})