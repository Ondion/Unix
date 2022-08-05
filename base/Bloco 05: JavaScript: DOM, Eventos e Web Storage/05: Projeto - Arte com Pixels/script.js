function criaDiv(numb) { // Cria divs em quantidade passada em parâmetro e atribui a classe "pixel".
    // document.getElementById("pixel-board").style.maxWidth = "50px";
    // document.getElementById("pixel-board").style.maxHeight = "50px";

    document.getElementById("pixel-board").style.height =numb * 42 + "px";
    document.getElementById("pixel-board").style.width =numb * 42 + "px";


        while (document.querySelector("#pixel-board").firstElementChild != null) {
            document.querySelector("#pixel-board").firstElementChild.remove();
        };

    for (let index = 0; index < numb * numb; index += 1) {
        document.querySelector("#pixel-board").appendChild(document.createElement("div")).className = "pixel"
        document.querySelector("#pixel-board").lastElementChild.style.backgroundColor = "white"
        document.querySelector("#pixel-board").lastElementChild.style.height = 40 + "px"
        document.querySelector("#pixel-board").lastElementChild.style.width = 40 + "px"
    };
};

function trocaSelected(objeto) { // Remove a classe .selected de qualquer elemento que a tenha.
    document.querySelector('.selected').classList.remove('selected');
    objeto.target.classList.add('selected');
};

function trocaPixel(objeto) {
    objeto.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor
};

function clearBoard() {
    for (let index = 0; document.getElementsByClassName("pixel").length > index; index += 1) {
        document.getElementsByClassName("pixel")[index].removeAttribute("style");
    };
};

function enviarVQV(evento) {
    evento.preventDefault();
    if (document.getElementById("board-size").value == "") {
        window.alert("Board inválido!")
        criaDiv(5)
    } else {
        if (document.getElementById("board-size").value < 5) {
            criaDiv(5)
            document.getElementById("board-size").value = ""
        } else if (document.getElementById("board-size").value > 50) {
            criaDiv(50)
            document.getElementById("board-size").value = ""
        } else {
            criaDiv(document.getElementById("board-size").value)
            document.getElementById("board-size").value = ""
        }
    }
}

function corAleatoria() {
    arrayID = ["red", "green", "blue"]

    for (let index = 0; arrayID.length > index; index += 1) {
        document.getElementById("black").style.backgroundColor = "black"
        document.getElementById(arrayID[index]).style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    };
};




//----------------------------------------------------------------------------------------// 



function startAll() {

    criaDiv(5);
    corAleatoria()
    document.querySelector("#black").addEventListener("click", trocaSelected);
    document.querySelector("#red").addEventListener("click", trocaSelected);
    document.querySelector("#green").addEventListener("click", trocaSelected);
    document.querySelector("#blue").addEventListener("click", trocaSelected);
    document.querySelector("#pixel-board").addEventListener("click", trocaPixel);
    document.querySelector("#generate-board").addEventListener("click", enviarVQV);

};

window.onload = startAll;


// document.getElementById("pixel-board").style.maxWidth = "50px";
// document.getElementById("pixel-board").style.maxHeight = "50px";

//     // max-width
//     // min-width
//     // max-height
//     // min-height
