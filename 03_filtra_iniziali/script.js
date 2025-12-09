/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const userCharacter = 'A'

// Dichiara la funzione qui.

function oneCharacterArray(array, character){

    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if(array[i].charAt(0) === character){
            newArray.push(array[i])
        }
    }
    
     return newArray;
} 


// Invoca la funzione qui e stampa il risultato in console

console.log(oneCharacterArray(names, userCharacter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]