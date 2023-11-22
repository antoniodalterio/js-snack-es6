'use strict';

/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

// MIlestone 1
function numeroRandom() {
  const num = Math.floor(Math.random() * 20) + 15;
  return num;
}

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
// Milestone 2

let biciLeggera = bici[0];
bici.forEach((bici) => {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
});

const { nome, peso } = biciLeggera;
const body = document.querySelector('.container');
body.innerHTML = `<h1> La bici &#128690 più leggera è la ${nome} con un peso di ${peso} kg.</h1>`;
console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg.`);
