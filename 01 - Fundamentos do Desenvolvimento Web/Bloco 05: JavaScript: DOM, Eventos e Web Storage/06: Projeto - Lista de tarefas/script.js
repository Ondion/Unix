function enviar(evento){ // função para adicionar elementos a lista e apagar o formulário após esse envio.
    evento.preventDefault();
    if (document.getElementById("texto-tarefa").value == ""){
        return;
    };
    document.getElementById("lista-tarefas").appendChild(document.createElement("li")).innerText = document.getElementById("texto-tarefa").value
    document.getElementById("texto-tarefa").value = ""
};

function trocarCor(evento){
    if(document.querySelector(".cor") != null){
        document.querySelector(".cor").classList.remove("cor");
    };
    evento.target.classList.add("cor");
};

function riscaTexto(evento){
    if(evento.target.classList.value == "cor"){
        evento.target.classList.add("completed");
    } else {
        evento.target.classList.remove("completed");
    }
};

function apagaTudo(evento){
    while(document.getElementsByTagName("li").length != 0){
        document.getElementById("lista-tarefas").removeChild(document.querySelector("li"));
    };
};

function apagaFinalizados(){
    while(document.querySelector(".completed") != null){
        document.getElementById("lista-tarefas").removeChild(document.querySelector(".completed"));
    };
};

function salvarTarefas(){
    let objeto = {};
    for(let index = 0; document.querySelectorAll("li").length > index; index += 1){
        objeto[index] = [document.querySelectorAll("li")[index].className, document.querySelectorAll("li")[index].innerText]
    };
    localStorage.setItem("listaTarefas", JSON.stringify(objeto));
};

function recuperarTarefas(){
    for(index in JSON.parse(localStorage.getItem("listaTarefas"))){
        document.getElementById("lista-tarefas").appendChild(document.createElement("li")).innerText = JSON.parse(localStorage.getItem("listaTarefas"))[index][1]

        document.querySelectorAll("li")[index].className = JSON.parse(localStorage.getItem("listaTarefas"))[index][0];
    }
};

function moverCima(){
    let x = 0;
    let pos1 = document.querySelector(".cor")
    if(pos1 == null){
        return;
    }; 
    let pos2 = pos1.previousElementSibling
    if(pos2 == null){
        return;
    } else{
        document.querySelector(".cor").classList.remove("cor");
        pos2.classList.add("cor")
        x = pos1.innerText;
        pos1.innerText = pos2.innerText;
        pos2.innerText = x;
    };
};

function moverBaixo(){
    let x = 0;
    let pos1 = document.querySelector(".cor")
    if(pos1 == null){
        return;
    }; 
    let pos2 = pos1.nextElementSibling
    if(pos2 == null){
        return;
    } else{
        document.querySelector(".cor").classList.remove("cor");
        pos2.classList.add("cor")        
        x = pos1.innerText;
        pos1.innerText = pos2.innerText;
        pos2.innerText = x;
    };
};

function removerSelecionado(){
    document.querySelector(".cor").remove();
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


document.getElementById("criar-tarefa").addEventListener("click", enviar); // Evendo no botão adicionar, para receber as informações.
document.getElementById("lista-tarefas").addEventListener("click", trocarCor); // Troca a cor do elemento da lista quando clicado.
document.getElementById("lista-tarefas").addEventListener("dblclick", riscaTexto); // Risca o elemento tido como completo.
document.getElementById("apaga-tudo").addEventListener("click", apagaTudo); // Apaga todos os elementos dentro da lista.
document.getElementById("remover-finalizados").addEventListener("click", apagaFinalizados); // Apaga todos os elementos dentro da lista finalizados.
document.getElementById("salvar-tarefas").addEventListener("click", salvarTarefas); // Salva nos web-storage o conteúdo.
document.getElementById("mover-cima").addEventListener("click", moverCima);
document.getElementById("mover-baixo").addEventListener("click", moverBaixo);
document.getElementById("remover-selecionado").addEventListener("click", removerSelecionado);

window.onload = recuperarTarefas();