const container = document.querySelector('.content-container');

var imageList = [];
var nameList = [];
var linkList = [];

imageList[0] = 'lampara con sacapunta.png';
nameList[0] = 'Lampara con Sacapunta';
linkList[0] = 'producto.html';

imageList[1] = 'Esfera navideña.png';
nameList[1] = 'Esferas Navideñas';
linkList[1] = 'navidenas.html';

imageList[2] = 'Vaso30onz.png';
nameList[2] = 'Vaso Yeti de 30onz';
linkList[2] = 'vaso30onz.html';

imageList[3] = 'bateria2.png';
nameList[3] = 'Baterias Portatiles';
linkList[3] = 'baterias.html';

imageList[4] = 'vaso azul.png';
nameList[4] = 'Vasos Termicos';
linkList[4] = 'termicos.html';

imageList[5] = 'boteniño.png';
nameList[5] = 'Bote de Niño';
linkList[5] = 'nino.html';

imageList[6] = 'audifonos.png';
nameList[6] = 'Audifonos Inalambricos';
linkList[6] = 'audifono.html';

imageList[7] = 'carritos.png';
nameList[7] = 'Set de 24 carritos';
linkList[7] = 'carritos.html';

imageList[8] = 'cuadradas.png';
nameList[8] = 'Lampara de Cristal Cuadrada';
linkList[8] = 'cuadradas.html';

imageList[9] = 'morado.png';
nameList[9] = 'Lampara de Tulipanes Cuadrado';
linkList[9] = 'Tulipanes.html';

imageList[10] = 'labubu.png';
nameList[10] = 'Lampara Led de Labubu';
linkList[10] = 'labubu.html';

imageList[11] = 'cristal.png';
nameList[11] = 'Lampara de Cristal';
linkList[11] = 'Cristal.html';

imageList[12] = 'balsamo.png';
nameList[12] = 'Balsamo Labial Magico';
linkList[12] = 'Balsamo.html';

imageList[13] = 'acostado.png';
nameList[13] = 'Lámparas con forma de astronauta';
linkList[13] = 'Acostado.html';

imageList[14] = 'cuello.png';
nameList[14] = 'Ventilador de cuello';
linkList[14] = 'Cuello.html';

imageList[15] = 'osito.png';
nameList[15] = 'Ventilador de escritorio';
linkList[15] = 'Osito.html';

imageList[16] = 'negros.png';
nameList[16] = 'Set Botes de plástico';
linkList[16] = 'negro.html';

imageList[16] = 'acrilica3.png';
nameList[16] = 'Lámparas acrílicas Led';
linkList[16] = 'Acrilico.html';

for (var i = 0; i < imageList.length; i++) {
  container.innerHTML +=
    '<div class="image-container">' +
      '<a href="' + linkList[i] + '">' +
        '<img src="' + imageList[i] + '">' +
      '</a>' +
      '<span class="image-name">' + nameList[i] + '</span>' +
    '</div>';
}


