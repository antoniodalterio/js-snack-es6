'use strict';

/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

function numeroRandom() {
  const num = Math.floor(Math.random() * 30 + 10);

  return num;
}

console.log(numeroRandom());

const bici = [
  {
    nome: 'Bici da città',
    peso: numeroRandom(),
  },
  {
    nome: 'Mountain bike',
    peso: numeroRandom(),
  },
  {
    nome: 'Bmx',
    peso: numeroRandom(),
  },
  {
    nome: 'Bici da cicloturismo',
    peso: numeroRandom(),
  },
  {
    nome: 'Downhill',
    peso: numeroRandom(),
  },
];

console.log(bici);
