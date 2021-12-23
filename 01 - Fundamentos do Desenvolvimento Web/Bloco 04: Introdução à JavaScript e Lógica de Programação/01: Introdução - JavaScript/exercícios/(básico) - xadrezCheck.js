// Retorna informações sobre peças de xadrez.

let peça = "dAmA".toLowerCase();

switch (peça) {
    case "dama":
        console.log("A dama se movimenta em diagonais ou retas qualquer quantidade de casas.");
        break;
    case "outros":
        console.log("desenhar outras peças");
        break;
    default:
        console.log("essa peça não existe no xadrez.");
}