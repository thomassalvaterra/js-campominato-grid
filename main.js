// <div class="square"></div>
let bottone = document.getElementById("btnPlay");

btnPlay.addEventListener("click", function() {
    console.log("Bottone cliccato");
});


//creare la griglia dinamicamente, inserendo N elementi .square nel container
let numCelle = 100;
let grid = document.getElementById("grid");

for (let i = 1; i <= numCelle; i++) {

    let cella = creaQuadrato(i);
    grid.appendChild(cella);
    document.getElementsById("cella").innerHTML = creaQuadrato(i);
}

function creaQuadrato(numero) {

    const cella = document.createElement("div");
    cella.classList.add("square");

    //per ogni quadrato voglio un evento che gestisca il click
    cella.addEventListener("click", function() {
        console.log("Cella cliccata", numero);
        cella.classList.toggle("evidenziata");

    });

    return cella;
}