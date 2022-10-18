/**  L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
        - creo un bottone e con addeventlistener vado poi a creare una grid dinamica
        -creo una griglia in html e js
        - metto il container in html, lo seleziono in js con il queryselector
        -metto all'interno del container i vari elementi creandoli con createElement e li aggiungo 
        -utilizzo il ciclo for per mettere gli elementi all'interno della pagina
*/

//Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
    // uso addeventlistener e toggle per mettere e togliere la classe "active"
//e emetto un messaggio in console con il numero della cella cliccata.
  //utilizzo this

  // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    //uso Math.random e creo una funzione che posso richimare 
    
//   Attenzione:
//   **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
    //creo un array vuoto
    //uso un ciclo while per generare e pushare i numeri all'interno dell'array
    //per far si che non si ripetano utilizzo if
    //se non è presente lo pusho altrimenti non faccio niente e continuo il ciclo

//   In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
//   Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//   La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//   Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

 /**  Bonus
  Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
  con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
  con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
   con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

    se d_1 allora i=1 e gridsize = 100
    se d_2 allora i= 2 e gridsize = 81
    se d_3 allora i= 3 e gridsize = 49
*/

const btnEl = document.querySelector("button");
const containerEL = document.querySelector(".container");
let startNumb = 1;
let gridSize = 100;
const scoreEl = document.querySelector("span.score")
let generatedBombs = [];
let count;



btnEl.addEventListener("click", function () {

    //svuoto la griglia
    containerEL.innerHTML = "";

    let difficulty = document.querySelector("select").value;
    console.log(difficulty);

    if (difficulty === "difficoltà_1") {
        startNumb = 1;
        gridSize = 100;
        generatedBombs = generateRandomBomb(startNumb,gridSize);
        console.log(generatedBombs);
    }else if (difficulty === "difficoltà_2") {
        startNumb = 2;
        gridSize = 81;
        generatedBombs = generateRandomBomb(startNumb,gridSize);
        console.log(generatedBombs);
    }else{
        startNumb = 3;
        gridSize = 49;
        generatedBombs = generateRandomBomb(startNumb,gridSize);
        console.log(generatedBombs);
    }

    function createGrid(min, max) {
        
        for (let i = min; i <= max; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell")
            cellEl.innerText = [i]
            //console.log(cellEl);
            containerEL.insertAdjacentElement("beforeend",cellEl);

            
        

            //in base alla difficoltà si forma la griglia
            if (difficulty === "difficoltà_1") {
                cellEl.classList.add('col_10');
            }else if (difficulty === "difficoltà_2") {
                cellEl.classList.add('col_9');
            }else{
                cellEl.classList.add('col_7');
            }
    
            //quando clicco sulla casella si mette e toglie la classe active
            
            cellEl.addEventListener("click", function(){
                console.log(this.innerText);
                const cellInternalNumber = Number(this.innerText);
                console.log(cellInternalNumber);
                const boolean = generatedBombs.includes(cellInternalNumber);
                console.log(generatedBombs);
                console.log(boolean);
                if (boolean) {
                    cellEl.classList.add("lose")
                    console.log("sono dentro all'if");
                    scoreEl.innerHTML = 'Il tuo punteggio è di: ' 
                }else{
                    cellEl.classList.toggle("active")
                    console.log("sono dentro all'else");
                }
                console.log([i]);

                //counter
                let count = 0
                cellEl.onclick = function(){
                count += 1
                return count
                }

                console.log(count);
                
            })
            
        }
        
        
    }

    createGrid(startNumb,gridSize);
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function generateRandomBomb(min,max) {
    const bombs = [];
    while (bombs.length !== 16) {
        const randomBombsNumb = generateRandomNumber(min,max);
        if (!bombs.includes(randomBombsNumb)) {
        bombs.push(randomBombsNumb)
       }
    }
    return bombs;
}







