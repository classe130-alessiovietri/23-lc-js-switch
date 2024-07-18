const userPosition = parseInt(prompt('In che posizione sei arrivato?'));

const primoPosto = 1;
const secondoPosto = 2;
const terzoPosto = 3;

// if (userPosition === primoPosto) {
//     alert('Wow! Sei arrivato primo! Complimenti!');
// }
// else if (userPosition === secondoPosto) {
//     alert('Bravo, sei arrivato secondo!');
// }
// else if (userPosition === terzoPosto) {
//     alert('Ottimo, sei sul podio!');
// }
// else {
//     alert('Sei arrivato in posizione ' + userPosition);
// }

switch (userPosition) {

    case primoPosto:        // if (userPosition === primoPosto)
        alert('Wow! Sei arrivato primo! Complimenti!');
        break;

    case secondoPosto:      // else if (userPosition === secondoPosto)
        alert('Bravo, sei arrivato secondo!');
        break;

    case terzoPosto:        // else if (userPosition === terzoPosto)
        alert('Ottimo, sei sul podio!');
        break;

    default:                // else
        alert('Sei arrivato in posizione ' + userPosition);
        break;

}