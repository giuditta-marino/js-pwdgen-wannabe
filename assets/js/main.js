// CHIEDO NOME E SALVO IN VARIABILE
var nome = prompt("Qual è il tuo nome?");
console.log(nome);

// CHIEDO COGNOME E SALVO IN VARIABILE
var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

// CHIEDO COLORE PREFERITO E SALVO IN VARIABILE
var colorePreferito = prompt("Qual è il tuo colore preferito?");
console.log(colorePreferito);

// STAMPO PASSWORD NEL DOM NELL'ELEMENTO CON ID PASSWORD
document.getElementById('password').innerHTML= nome + cognome + colorePreferito + "21";
