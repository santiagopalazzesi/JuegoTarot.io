let random = document.getElementById('random');
let cardcont = document.getElementById('cardcont');
let tarotcardcont = document.getElementById('tarotcardcont');
let getluky = document.getElementById('getluky');
let cartapagana = document.getElementById('cartapagana');
let carouselExampleIndicators = document.getElementById(
  'carouselExampleIndicators'
);
let contenedordelresultado = document.getElementById('contenedordelresultado');

const conteo = function () {
  setTimeout(function () {
    tarotcardcont.style.display = 'none';
    contenedordelresultado.style.display = 'block';
    let array = [
      {
        nombre: 'El loco',
        descripción: 'alucinaciones próximas',
        image: 'images/0.jpg',
      },
      {
        nombre: 'El mago',
        descripción: 'hechicería diabólica',
        image: 'images/1.jpg',
      },
      {
        nombre: 'Sacerdotisa',
        descripción: 'Escala al cielo',
        image: 'images/2.jpg',
      },
    ];

    array.map((carta) => {
      let modelocarta =
        '<li>' +
        carta.nombre +
        ' ' +
        carta.descripción +
        ' ' +
        carta.image +
        '</li>';
      cartapagana.innerHTML += modelocarta;
    });

    let dameRandom = (min, max) => {
      return Math.round(Math.random() * max) + min;
    };

    alert(array[dameRandom(0, array.length)].nombre);
  }, 3000);
};

//*Trael el carousel adentro del modelocarta y añadirle los parametros que necesita para imprimir en el index lo que el usuario escribe en los imput*//
