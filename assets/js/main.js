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


btnEl.addEventListener("click", function () {

    
    let difficulty = document.querySelector("select").value;
    console.log(difficulty);

    if (difficulty === "difficoltà_1") {
        startNumb = 1;
        gridSize = 100;
        
    }else if (difficulty === "difficoltà_2") {
        startNumb = 2;
        gridSize = 81;
    }else{
        startNumb = 3;
        gridSize = 49;
    }

    function createGrid(min, max) {
        
        for (let i = min; i <= max; i++) {
            const cellEl = document.createElement("div");
            cellEl.classList.add("cell")
            cellEl.innerText = [i]
            console.log(cellEl);
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
                cellEl.classList.toggle("active")
                console.log([i]);
            })
        }
        
    }
    
createGrid(startNumb,gridSize);


    
})