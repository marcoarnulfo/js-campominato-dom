
const containerNoob = document.querySelector(".containerNoob")
const containerInt = document.querySelector(".containerInt")
const containerPro = document.querySelector(".containerPro")
let casella = document.createElement("div")
//container.append(casella)

counter = false
let punteggio = 0

const nabbo = document.querySelector(".nabbo")
const intermedio = document.querySelector(".intermedio")
const pro = document.querySelector(".pro")

const punteggioElement = document.querySelector("h2")

//function gridGenerator(min, max, casellaDiffult,classColor, containerDifficult)

nabbo.addEventListener("click", function () {
    containerNoob.classList.toggle("hide")
    containerInt.classList.add("hide")
    containerPro.classList.add("hide")
    gridGenerator(1, 100, "casella", containerNoob)
    //gridGeneratorNoob(1, 100, "casella")
    punteggioElement.classList.add("hide")  
})

intermedio.addEventListener("click", function () {
    containerInt.classList.toggle("hide")
    containerNoob.classList.add("hide")
    containerPro.classList.add("hide")
    gridGenerator(1, 81, "casellaInt", containerInt)
    punteggioElement.classList.add("hide") 
})

pro.addEventListener("click", function () {
    containerPro.classList.toggle("hide")
    containerNoob.classList.add("hide")
    gridGenerator(1, 81, "casellaPro", containerPro)
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
console.log(bombs);

// buleano tornare fals o true 
// counter conta doppio

/*

function gridGeneratorNoob(min, max, ciao) {
    for (let index = min; index <= max; index++) {
        //console.log(index);
        let casella = document.createElement("div")
        casella.append(index)
        containerNoob.append(casella)
        casella.classList.add(ciao)
        // al click di una casella, aggiungo e tolgo una classe per cambiargli il colore
        // e stampo in console il contenuto di idex (il numero della casella)
        casella.addEventListener("click", function () {
            if (bombs.includes(index)) {
                console.log("SI PUO' FARE!!!");
                counter = true
            } else {
                punteggio++
                console.log(punteggio, "punteggio giocatore");
                casella.classList.toggle("red")
                //console.log(index);
            }
            if (counter) {
                punteggioElement.innerHTML = "il tuo punteggio è: " + punteggio
                punteggioElement.classList.remove("hide")
                containerNoob.innerHTML = ''
                //alert("Ups, hai preso una bomba! il tuo punteggio è: " + punteggio)
            }
        })
    }
}

*/

let score = []
console.log(score);

console.log(punteggio);
/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @param {class} casellaDiffult
 * @param {class} classColor
 * @param {element} containerDifficult
 */
function gridGenerator(min, max, casellaDiffult, containerDifficult) {
    for (let index = min; index <= max; index++) {
        //console.log(index);
        let casella = document.createElement("div")
        casella.append(index)
        containerDifficult.append(casella)
        casella.classList.add(casellaDiffult)
        casella.addEventListener("click", function () {
            if (bombs.includes(index)) {
                console.log("SI PUO' FARE!!!");
                counter = true
            } else if (!score.includes(index)) {
                score.push(index)
                console.log(score);
                console.log("funziono!!");
                casella.classList.toggle("red")
            }
            if (counter) {
                punteggioElement.innerHTML = "il tuo punteggio è: " + score.length
                console.log(score);
                punteggioElement.classList.remove("hide")
                containerDifficult.innerHTML = ''
                //alert("Ups, hai preso una bomba! il tuo punteggio è: " + punteggio)
            }
        })
    }
}
//console.log(score);
for (let index = 1; index <= 49; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerPro.append(casella)
    casella.classList.add("casellaPro")
    casella.addEventListener("click", function () {
        if (bombs.includes(index)) {
            console.log("SI PUO' FARE!!!");
            counter = true
        } else {
            punteggio++
            console.log(punteggio, "punteggio giocatore");
            casella.classList.toggle("purple")
            //console.log(index);
        }
        if (counter) {
            punteggioElement.innerHTML = "il tuo punteggio è: " + punteggio
            punteggioElement.classList.remove("hide")
            containerPro.innerHTML = ''
            //alert("Ups, hai preso una bomba! il tuo punteggio è: " + punteggio)
        }
    })
}

