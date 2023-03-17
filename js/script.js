// chiedere all'utente il nome, cognome, colore preferito e unire le informazioni ricevute  


/*
1. chiedere e salvare il nome.
2. chiedere e salvare il cognome.
3. chiedere e salvare il colore preferito.
4. unire le informazioni
*/

const name = prompt("inserisci il tuo nome", "Mirko");
console.log(name);

const cognome = prompt("inserisci il tuo cognome", "Di Franco")

const colorePreferito = prompt("qual'è il tuo colore preferito?", "rosso")

const age = prompt("quanti anni hai?", "20");

console.log(cognome, colorePreferito, age)

const password = name + cognome + colorePreferito + age;

document.getElementById("random_password").innerHTML =`La tua password è: ` + password;