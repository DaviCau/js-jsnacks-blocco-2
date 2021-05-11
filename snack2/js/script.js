/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
}

var squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
];

for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumber(50, 100);
    squadre[i].falliSubiti = randomNumber(1000, 2000);
}
console.log(squadre);

var nuovoArray = [];

for (var j = 0; j < squadre.length; j++) {
    var nuovoOggetto = {
        nome: squadre[j].nome,
        falliSubiti: squadre[j].falliSubiti
    }

    nuovoArray.push(nuovoOggetto);
}
console.log(nuovoArray);