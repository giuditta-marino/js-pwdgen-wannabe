// CHIEDO NOME E SALVO IN VARIABILE
var nome = prompt("Qual è il tuo nome?");
console.log(nome);

// CHIEDO COGNOME E SALVO IN VARIABILE
var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

// CHIEDO COLORE PREFERITO E SALVO IN VARIABILE
var colorePreferito = prompt("Qual è il tuo colore preferito?");
console.log(colorePreferito);

// CHIEDO DATA DI NASCITA E SALVO IN VARIABILE
var dataDiNascita = prompt("Qual è la tua data di nascita? es. 010199");
console.log(dataDiNascita);

// STAMPO NOME NEL DOM NELL'ELEMENTO CON ID WELCOME
document.getElementById('welcome').innerHTML= "Ciao " + nome + ", la tua password è:";

// STAMPO PASSWORD NEL DOM NELL'ELEMENTO CON ID PASSWORD
document.getElementById('password').innerHTML = nome + cognome + colorePreferito + dataDiNascita + "21";
