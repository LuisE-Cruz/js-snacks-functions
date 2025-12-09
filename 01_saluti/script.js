/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
let saluto = "Ciao";
const message = welcome(saluto, userName);
// Dichiara la funzione qui.

function welcome(saluto, nome){
    let message = (saluto + " " + userName)
    return message;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(message);

//Risultato atteso se si passa 'Mario': // ciao Mario
