/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator (a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {return this.a + this.b};
    this.substraction = function () {return this.a - this.b};
    this.multiplication = function () {return this.a * this.b};
    this.division = function () {return this.a / this.b}
}

const sumRez = new Calculator(5,5);
console.log(sumRez.sum());


const subsRez = new Calculator(5,5);
console.log(subsRez.substraction());


const multipRez = new Calculator(5,5);
console.log(multipRez.multiplication());


const divisionRez = new Calculator(5,5);
console.log(divisionRez.division());