
const containerNoob = document.querySelector(".containerNoob")
const containerInt = document.querySelector(".containerInt")
const containerPro = document.querySelector(".containerPro")
let casella = document.createElement("div")
//container.append(casella)



const nabbo = document.querySelector(".nabbo")
const intermedio = document.querySelector(".intermedio")
const pro = document.querySelector(".pro")

nabbo.addEventListener("click", function () {
    containerNoob.classList.toggle("hide")
    containerInt.classList.add("hide")
    containerPro.classList.add("hide")
})

intermedio.addEventListener("click", function () {
    containerInt.classList.toggle("hide")
    containerNoob.classList.add("hide")
    containerPro.classList.add("hide")
})

pro.addEventListener("click", function () {
    containerPro.classList.toggle("hide")
    containerNoob.classList.add("hide")
    containerInt.classList.add("hide")
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {number} min min. number
 * @param {number} max max. number
 * @returns  
 */

 const bombs = [] // 0 

function generateBombs(min, max) {
    while (bombs.length !== 16) { // fino a 16
        // genero un numero casuale
        const bomb = generateRandomNumber(min, max)
        // verifico se il numero è stato già inserito nella lista di boms
        // se non lo è, lo aggiungo. altrimenti vado avanti
        if (!bombs.includes(bomb)) {
            // se la condizione è falsa allora eseguo il codice qui dentro
            bombs.push(bomb)
        }
    }
}




generateBombs(1, 100)
console.log(generateBombs(1, 100));

console.log(bombs);







for (let index = 1; index <= 100; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerNoob.append(casella)
    casella.classList.add("casella")
    // al click di una casella, aggiungo e tolgo una classe per cambiargli il colore
    // e stampo in console il contenuto di idex (il numero della casella)
    casella.addEventListener("click", function () {
        if (index === bombs[0]) {
            console.log("SI PUO' FARE!!!");
            casella.classList.toggle("red")
        }
        console.log(index);
        casella.classList.toggle("red")
    })
}


for (let index = 1; index <= 81; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerInt.append(casella)
    casella.classList.add("casellaInt")
    casella.addEventListener("click", function () {
        console.log(index);
        casella.classList.toggle("green")
    })
}



for (let index = 1; index <= 49; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerPro.append(casella)
    casella.classList.add("casellaPro")
    casella.addEventListener("click", function () {
        console.log(index);
        casella.classList.toggle("purple")
    })
}

/**
 * @param {number} n un numero intero progressivo
 * @param {number} cells_per_row max cells to generate
 * 
 */


// devo generare 16 (numeri casuali), le bombe, i numeri non devono essere ripetuti
/*
const bombs = [] // 0 
while(bombs.length !== 16) { // fino a 16

    // genero un numero casuale
    const bomb = generateRandomNumber(1, 100)
    // verifico se il numero è stato già inserito nella lista di boms
    // se non lo è, lo aggiungo. altrimenti vado avanti
    if (!bombs.includes(bomb)) { 
        // se la condizione è falsa allora eseguo il codice qui dentro
        bombs.push(bomb)
    }
}
*/
//console.log(bombs);
//const bombs = generateBombs(1, 100)
//console.log(bombs);
// funzione per generare bombe, come sopra!



