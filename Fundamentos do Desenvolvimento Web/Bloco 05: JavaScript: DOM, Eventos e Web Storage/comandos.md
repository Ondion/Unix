```
document.getElementById("ID do elemento")

document.getElementByID("ID do elemento").innerHTML

document.getElementByID("ID do elemento").innerText

document.getElementById("ID do elemento").style
    *const elemento = document.getElementById("ID do elemento");
    elemento.style.backgroundColor = "gray";
    elemento.style.textAlign = "center";

document.getElementById("ID do elemento").innerHTML = "<p> Alterando o conteúdo HTML pelo javaScript</>";

document.getElementById("ID do elemento").innerText = "Alterando só o texto pelo javaScript";

document.getElementsByClassName("classe do elemento");
**Retorna uma lista, é necessário fazer uma interação para modificação, ou passar a posição no indice.**

tag = document.getElementsByTagName("TAG do elemento");
**Retorna uma lista, é necessário fazer uma interação para modificação, ou passar a posição no indice.**

document.querySelector("#test2")

