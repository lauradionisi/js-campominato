// Il computer deve generare 16 numeri casuali tra 1 e 100.

function randomNumbers(quantity, min, max) {
var arrayRandom = [];
    for (var i = 0; i < quantity;  i++ ) {
        var number = parseInt((Math.random() * (max-min+1)) + min);
        do {
            var exist = arrayRandom.indexOf(number);
            if (exist >= 0) {
                number = parseInt((Math.random() * (max-min+1)) + min);
            }
            else {
                arrayRandom.push(number);
                exist = -2;
            }
        }
        while (exist > -1);
    }
    return arrayRandom;
}
var random_numbers = randomNumbers(16, 1, 100);
console.log(random_numbers);

// chiedere 16 volte il numero

var numberPlayer = prompt("Inserisci un numero da 1 a 100");
 for (var i = 0; i < 100; i++); {
  console.log(numberPlayer);
 }

 // confrontare i numeri inseriti con i numeri dell'array
