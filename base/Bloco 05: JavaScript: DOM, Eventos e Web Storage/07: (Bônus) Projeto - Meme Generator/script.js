
document.getElementById("text-input").addEventListener("input", function(evento){
    document.getElementById("meme-text").innerText = document.getElementById("text-input").value  
})

document.getElementById("meme-insert").addEventListener("input", function(evento){

    document.getElementById("meme-image").src = URL.createObjectURL(document.getElementById("meme-insert").files[0])
 
})

document.querySelector("#fire").addEventListener("click", function(evento){
    document.getElementById("meme-image-container").style.border = "dashed red 3px"
    document.getElementById("relacionar").className = "class-fire" 
})
document.querySelector("#water").addEventListener("click", function(evento){
    document.getElementById("meme-image-container").style.border = "blue 5px double"
    document.getElementById("relacionar").className = "class-water" 
})
document.querySelector("#earth").addEventListener("click", function(evento){
    document.getElementById("meme-image-container").style.border = "6px green groove"
    document.getElementById("relacionar").className = "class-earth" 
})

document.getElementById("meme-1").addEventListener("click", function(){
    document.getElementById("meme-image").src = "imgs/meme1.png"
})
document.getElementById("meme-2").addEventListener("click", function(){
    document.getElementById("meme-image").src = "imgs/meme2.png"
})
document.getElementById("meme-3").addEventListener("click", function(){
    document.getElementById("meme-image").src = "imgs/meme3.png"
})
document.getElementById("meme-4").addEventListener("click", function(){
    document.getElementById("meme-image").src = "imgs/meme4.png"
})