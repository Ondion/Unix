// Switch

let weekDay = 6; // fracamente tipada

weekDay = "xablau";

switch(weekDay) {
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Dia de maldade");
        break;
    case 7:
        console.log('Fim de semana');
        console.log("Sábado")
        // break;
    case 1:
        console.log("Domingo");
        break;
    case "xablau":
        console.log("Que dia maravilhoso!");
        break;
    default:
        console.log("Não existe esse dia, ainda :)");
}

// let status = "BLOQUEADA";
// switch (status) {
//     case "BLOQUEADA":
//         // ENVIA EMAIL
//     case "DEVEDOR":
//         // NOTIFICA GERENTE
//         break;
//     case "INVESTIDOR":
//         // ENVIA PROPOSTA DE INVESTIMENTO
// }

