corSalva = "(" + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ")"

document.querySelector("#rgb-color").innerText = corSalva;

document.getElementById("title").innerText = "Color Guess!"

document.getElementById("div-title").appendChild(document.createElement("p")).id = "score";
document.getElementById("score").innerText = "Placar: "


for (let index = 0; 6 > index; index += 1) {
    document.querySelector(".div-main").appendChild(document.createElement("div")).className = "ball";
    document.querySelector(".div-main").lastElementChild.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ")"
}

document.getElementsByClassName("ball")[Math.floor(Math.random() * 6)].style.backgroundColor = "rgb" + corSalva;


document.querySelector("main").appendChild(document.createElement("p")).id = "answer";
document.getElementById("answer").innerText = "Escolha uma cor"

document.querySelector("main").appendChild(document.createElement("button")).id = "reset-game";
document.getElementById("reset-game").innerText = "Reset Game"

let pontuacao = 0;
document.getElementById("score").innerText = "Placar: " + pontuacao;

document.querySelector(".div-main").addEventListener("click", function (evento) {
    if (evento.target.style.backgroundColor == "rgb" + corSalva) {
        document.getElementById("answer").innerText = "Acertou!"
        pontuacao += 3;
        document.getElementById("score").innerText = "Placar: " + pontuacao;
    } else {
        document.getElementById("answer").innerText = "Errou! Tente novamente!"
    }
})

document.querySelector("#reset-game").addEventListener("click", function (evento) {
    for (let index = 0; document.querySelectorAll(".ball").length > index; index += 1){
        document.querySelectorAll(".ball")[index].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ")"
    };
    corSalva = "(" + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ", " + + Math.floor(Math.random() * 256) + ")"
    document.querySelector("#rgb-color").innerText = corSalva;
    document.getElementsByClassName("ball")[Math.floor(Math.random() * 6)].style.backgroundColor = "rgb" + corSalva;
    document.getElementById("answer").innerText = "Escolha uma cor"
});

