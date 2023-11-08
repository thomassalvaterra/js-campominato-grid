// <div class="square"></div>
let bottone = document.getElementById("btnPlay");

btnPlay.addEventListener("click", function() {
    console.log("Avvia partita!");
    creaGriglia();
});

// let numCelle = 100;
// let grid = document.getElementById("grid");

function creaGriglia() {

    const grid = document.getElementById("grid");
    //vogliamo che la griglia sia vuota
    grid.innerHTML = "";

    //recupera il livello dalla select
    const livello = getLivello();
    let numCelleTotali;
    let numCellePerRiga;

    if(livello==1) {
        numCelleTotali = 100;
        numCellePerRiga = 10;
    } else if(livello==2) {
        numCelleTotali = 81;
        numCellePerRiga = 9;
    } else if(livello==3) {
        numCelleTotali = 49;
        numCellePerRiga = 7;
    }

    const cellaFortunata = getRndInteger(1, numCelleTotali);
    document.getElementById("msg").innerText = `Cella fortunata: ${cellaFortunata}`; 

    for (let i = 1; i <= numCelleTotali; i++) {

        let cella = creaQuadrato(i, cellaFortunata);
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;

        if(i==cellaFortunata) {
            cella.style.border = "solid 1px red";
        };

        grid.appendChild(cella);
    }   
};
    
function getLivello() {

    const livello = parseInt(document.getElementById("livelli").value);
    console.log("Difficoltà: ", livello);
    return livello;
};

function creaQuadrato(numero, cellaFortunata) {

    const cella = document.createElement("div");
    cella.classList.add("square");
    cella.innerText = numero;

    //per ogni quadrato voglio un evento che gestisca il click
    cella.addEventListener("click", function() {
        // console.log("Cella cliccata", numero);
        if(numero==cellaFortunata) {
            console.log("Hai vinto", numero);
        } else {
            console.log("Hai sbagliato, ritenta", numero);
        }

        cella.classList.toggle("evidenziata");

    });

    return cella;
};   

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
