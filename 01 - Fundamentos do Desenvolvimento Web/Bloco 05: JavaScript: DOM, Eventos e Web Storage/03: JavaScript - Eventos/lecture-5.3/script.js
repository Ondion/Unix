// onload

// function queroCafe() {
//     console.log('Quero cafeeé');
// }

// window.onload = queroCafe; // lembrem de não colocar o ()

// ordem de execução
// função anônima
// window.onload = function () {
//     console.log('Palmas');
// }

// addEventListener
// let section = document.querySelector('.car-section');

// section.addEventListener('mouseover', function (event) {
//     console.log('target: ', event.target);
//     console.log('currentTarget: ', event.currentTarget);
//     console.log(event);

// //    event.target.style.border = '5px solid black';

// }); // <-- uma string e uma função


// event, target e currentTarget



// Como mover os carros?

window.onload = function () {
    
    let car1 = document.querySelector('.car1');
    car1.style.marginLeft = '0px';
    // console.log(car1);

    let car2 = document.querySelector('.car2');
    car2.style.marginLeft = '0px';
    // console.log(car2);

    let button = document.getElementById('start-race-btn');
    // console.log(button);

    button.addEventListener('click', function () {
        
        let pos1 = parseInt(car1.style.marginLeft);
        car1.style.marginLeft = (pos1 + Math.random() * 100) + 'px';
        
        let pos2 = parseInt(car2.style.marginLeft);
        car2.style.marginLeft = (pos2 + Math.random() * 100) + 'px';

        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('VERMELHO venceu!!');
        }

        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('VERDE venceu!!');
        }

    });

};



// window.innerWidth



// Bônus: setInterval e clearInterval


