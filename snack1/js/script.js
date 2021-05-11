/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

var biciclette = [
    {
        nome: "TheBike",
        peso: 21
    },
    {
        nome: "LighterBike",
        peso: 17
    },
    {
        nome: "SuperBike",
        peso: 24
    }
];

console.log("Biciclette:", biciclette);

var piuLeggera = {
    nome: "",
    peso: Number.POSITIVE_INFINITY
};
for (var i = 0; i < biciclette.length; i++) {

    if (biciclette[i].peso < piuLeggera.peso) {
        piuLeggera = biciclette[i];
    }
    
}

console.log("La bici più leggera è:", piuLeggera);