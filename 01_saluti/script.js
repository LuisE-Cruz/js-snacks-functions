/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function welcome(name){
    let message = "Ciao " + name;
    return message;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(welcome(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
