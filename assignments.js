'use strict';

// LECTURE FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
// const descBelgium = describeCountry('Belgium', 12, 'Antwerpen');
// const descNetherlands = describeCountry('theNetherlands', 17, 'Amsterdam');
// console.log(descPortugal, descBelgium, descNetherlands);


// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function dog(name, age, sex) {
//     const dogInfo = `My dog's name is ${name}, he is ${age} years old, he is a ${sex}.`;
//     return dogInfo;
// }

// const bobby = dog('Bobby', 5, 'male');
// console.log(bobby);

// LECTURE FUNCTION DECLARATIONS VS. EXPRESSIONS
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percNetherlands = percentageOfWorld1(17);
// const percGermany = percentageOfWorld1(83);
// const percBrazil = percentageOfWorld1(212);
// console.log(percNetherlands, percGermany, percBrazil);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// const percNetherlands2 = percentageOfWorld2(17);
// const percGermany2 = percentageOfWorld2(83);
// const percBrazil2 = percentageOfWorld2(212);
// console.log(percNetherlands2, percGermany2, percBrazil2);

// LECTURE ARROW FUNCTIONS
// const percentageOfWorld3 = population => (population / 7900) * 100;
// const percNetherlands3 = percentageOfWorld3(17);
// const percGermany3 = percentageOfWorld3(83);
// const percBrazil3 = percentageOfWorld3(212);

// console.log(percNetherlands3, percGermany3, percBrazil3);


const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkwinner(AvgDolphins, AvgKoalas) {
    if (AvgDolphins >= 2 * AvgKoalas) {
        console.log(`Dolphins win (${AvgDolphins} vs ${AvgKoalas})!! 🎉`)
    } else if (AvgKoalas >= 2 * AvgDolphins) {
        console.log(`Koalas win (${AvgKoalas} vs ${AvgDolphins})!!🎉`)
    } else {
        console.log('There is no winner...')
    }
}

checkwinner(scoreDolphins, scoreKoalas); //data 1

// data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkwinner(scoreDolphins, scoreKoalas); //data 2


