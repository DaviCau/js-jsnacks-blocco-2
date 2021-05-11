/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

function createArray(array, numPiccolo, numGrande) {
    var nuovoArray = [];
    for (var i = numPiccolo; i <= numGrande; i++) {
        nuovoArray.push(array[i]);
    }
    return nuovoArray;
}

var vecchioArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(vecchioArray);

console.log(createArray(vecchioArray, 3, 8));