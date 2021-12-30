console.log("EXE: 1", document.getElementById("elementoOndeVoceEsta"));
console.log("EXE: 2", document.getElementById("elementoOndeVoceEsta").parentNode.style.backgroundColor = "cyan");
console.log("EXE: 3", document.getElementById("primeiroFilhoDoFilho").innerText = "Texto adicionado conforme EXE 3.");
console.log("EXE: 4", document.getElementById("pai").firstElementChild);
console.log("EXE: 5", document.getElementById("elementoOndeVoceEsta").previousElementSibling);
console.log("EXE: 6", document.getElementById("elementoOndeVoceEsta").nextSibling);
console.log("EXE: 7", document.getElementById("elementoOndeVoceEsta").parentElement.lastElementChild.previousElementSibling);
console.log("EXE: 8", document.getElementById("pai").lastElementChild.previousElementSibling)