/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
  String - Rappresenta del testo, comprendendo anche i numeri contenuti al suo interno senza valore (deve essere tutto contenuto all'interno di 'apici' o "doppi apici")
  Number - Rappresenta i numeri con il loro effettivo valore, se presente del testo restituisce errore (il valore non deve essere contenuto tra apici di nessun tipo)
  Boolean - Valore a bivio, o sì o no. Ciò che può essere solo vero o falso
  Object - Coppia formata da chiave e valore, separati dall'operatore : (es. nome : Mario)
  Undefined - E' una variabile senza valore assegnato (o non definito)
  Null - Assenza volontaria di un oggetto
   */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 /*
 let nome = 'Andrea' 
 console.log(nome)
 */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let valore1 = 12
  let valore2 = 20
  console.log(valore1+valore2)
   */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


 let x = 12 
 console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
let name = 'Andrea'
console.log(name);
name = 'Barocchi'
console.log(name);
const name = 'Andrea'
console.log(name);
const name = 'Barocchi'
console.log(name);
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'

console.log(name1 != name2)

console.log(name1.toLowerCase() === name2.toLowerCase())
