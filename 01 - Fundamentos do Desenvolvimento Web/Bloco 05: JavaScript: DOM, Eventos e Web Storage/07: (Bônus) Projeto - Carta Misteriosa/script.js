document.getElementById("criar-carta").addEventListener("click", function(evento){

    while(document.querySelectorAll("span").length > 0){
        document.getElementById("carta-gerada").lastElementChild.remove()
    }

    if(document.getElementById("carta-texto").value.trim() == ""){
        document.getElementById("carta-gerada").innerText = "Por favor, digite o conteúdo da carta."
        
    }
        
        let cartas = document.getElementById("carta-texto").value.split(" ")
    
        let tipo = ["newspaper", "magazine1", "magazine2"];
        let tamanho = ["medium", "big", "reallybig"];
        let rotacao = ["rotateleft", "rotateright"];
        let inclinacao = ["skewleft", "skewright"];
    
        for(let index = 0; cartas.length > index; index += 1){
            document.getElementById("carta-gerada").appendChild(document.createElement("span")).innerText = cartas[index]
            document.getElementById("carta-gerada").lastChild.classList.add(tipo[(Math.floor(Math.random() * 3))], tamanho[(Math.floor(Math.random() * 3))], rotacao[(Math.floor(Math.random() * 2))], inclinacao[(Math.floor(Math.random() * 2))]);  
        };
    
        document.getElementById("carta-contador").innerText = document.getElementsByTagName("span").length
    

    document.getElementById("paragrafo").addEventListener("click", function(evento){
        evento.target.className = ""
        evento.target.classList.add(tipo[(Math.floor(Math.random() * 3))], tamanho[(Math.floor(Math.random() * 3))], rotacao[(Math.floor(Math.random() * 2))], inclinacao[(Math.floor(Math.random() * 2))]);
    })
})
