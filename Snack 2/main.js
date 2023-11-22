'use strict';
/*
 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// finzioni
function numeroRandom(num1) {
  const num = Math.floor(Math.random() * num1) + 1;
  return num;
}

// funzioni

const squadreCalcio = [
  {
    nome: 'SSC-Napoli',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Juventus',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

for (let k in squadreCalcio) {
  squadreCalcio[k].puntiFatti = numeroRandom(20);
  squadreCalcio[k].falliSubiti = numeroRandom(20);
}

console.log(squadreCalcio);

//  Milestone 2
const statistiche = squadreCalcio.map(({ nome, falliSubiti }) => ({
  nome,
  falliSubiti,
}));

statistiche.forEach(({ nome, falliSubiti }) => {
  console.log(`${nome} Falli subiti: ${falliSubiti}`);
});
