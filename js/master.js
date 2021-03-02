// var myNumber = getRandomNumber(1,100);
// alert(myNumber);

var arrayBombe = [];
var arrayNumeriUtente = [];
var numBombe = 16;
var max = 100;

// Bonus

var livello = prompt("Scegli tra 'facile', 'intermedio' o 'difficile'");

if (livello == "intermedio") {
  max = 80;
}
else if (livello == "difficile") {
  max = 50;
}

// Generare 16 numeri random

while (arrayBombe.length < numBombe) {
 var numeroGenerato = getRandomNumber(1, max);
 if (!isInArray(arrayBombe, numeroGenerato)) 
  arrayBombe.push(numeroGenerato);
}

console.log(arrayNumeriUtente);
console.log(arrayBombe);

// chiedere all'utente dei numeri e verificare che non siano presenti nell'arrayBombe

var partitaPersa = false;

while (arrayNumeriUtente.length < (max - numBombe)) {
  var partitaPersa = false;

  var numeroUtente = parseInt(prompt("inserisci un numero"));
  if(isInArray(arrayBombe, numeroUtente)) {
   alert("Hai perso!" + " Il tuo punteggio è "+ arrayNumeriUtente.length);
   partitaPersa = true;
   break;
  }
  else if (isInArray(arrayNumeriUtente, numeroUtente) == false) {
   arrayNumeriUtente.push(numeroUtente);
  }
  else if (isInArray(arrayNumeriUtente, numeroUtente) == true) {
   alert("Numero già inserito, prego inserirne un altro");
  }
  else if (arrayNumeriUtente.length == (max - numBombe)) {
   alert("Hai vinto!");
  }
}

// FUNZIONI

function getRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(array, value) {
 for (var i = 0; i < array.length; i++) {
   if(value == array[i]) {
      return true;
    }
  }
 return false;
} 