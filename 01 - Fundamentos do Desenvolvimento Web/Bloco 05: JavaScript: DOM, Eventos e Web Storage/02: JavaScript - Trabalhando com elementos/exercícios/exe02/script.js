console.log("EXE 1", document.getElementById("pai").appendChild(document.createElement("div")).innerText = "Irmão do #elementoOndeVoceEsta, conforme EXE 1");
console.log("EXE 2", document.getElementById("elementoOndeVoceEsta").appendChild(document.createElement("span")).innerText = "Filho do elemento 'elementoOndeVoceEsta', conforme exe 2");
console.log("EXE 3", document.getElementById("primeiroFilhoDoFilho").appendChild(document.createElement("span")).innerText = "Filho do elemento 'primeiroFilhoDoFilho', conforme exe 3");
console.log("EXE 4", document.getElementsByTagName("span")[0]);