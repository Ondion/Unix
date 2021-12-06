console.log(document.getElementById("teste").innerHTML);
console.log(document.getElementById("teste").innerText);
console.log(document.getElementById("test2"));
console.log(document.getElementById("test2").style);

document.getElementById("teste").innerHTML = "<p> Alterando o conteúdo HTML pelo javaScript</>";

document.getElementById("teste").innerText = "Alterando só o texto, que já foi alterado.";

const paragraph = document.getElementById("paragraph");
paragraph.style.color = "blue";
paragraph.style.backgroundColor = "green";

const titulo = document.getElementById("page-title");
titulo.innerText = "The Lord of the Rings";

const paragrafo2 = document.getElementById("second-paragraph");
paragrafo2.style.color = "red";
paragrafo2.style.textAlign = "center";

const subtitulo = document.getElementById("subtitle");
subtitulo.innerHTML = "<h5>Recebeu um h5</h5>";

var classe= document.getElementsByClassName("paragraph");
classe[2].style.color = "green";


let para= document.getElementsByTagName("p");
for (let ind = 0; ind < para.length; ind ++){
    para[ind].style.color = "blue";
}

var papaya = document.querySelector("#test2");
papaya.innerText = "Texto alterado";

let papa = document.querySelectorAll("span");
papa[0].innerText = "Todo texto alterado";
papa[0].style.backgroundColor = "grey";
para[0].style.padding = "0px"

