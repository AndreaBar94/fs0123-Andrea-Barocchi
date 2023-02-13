/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*function area(l1,l2){
    return l1*=l2
}
console.log(area(2,3))*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*function crazySum(a,b){
    if(a==b){
        return (a + b)*3
    }
    return  a + b
}
console.log(crazySum(3,3))*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*function crazyDiff(a,b){
    if(a>b){
        return (a-b)*3
    }
    return (a-b)*(-1)
}
console.log(crazyDiff(20,19))
situazionale, math.abs risolve meglio la logica
*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let boundary = (n) => (n>=20 && n<=100 || n== 400);
console.log(boundary(/*inserire numero*/)) 


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*function epify(n){
    if(n === 'EPICODE'){
        return n
    } return `EPICODE ${n}`
};
console.log(epify('pippo'))*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* function check3and7(c){
    c = Math.abs(c)
    if(c % 3 == 0 || c % 7== 0){
        return true
    }return false
}
console.log(check3and7(20)) */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* function reverseString(string){
    return string.split('').reverse('').join('')
}
console.log(reverseString('epicode')) */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*function upperFirst(string){
    return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
console.log(upperFirst('ciao mi chiamo andrea'))*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*
function cutString(string){
    return string
    .split('')
    .slice(1, string.length-1)
    .join('')
}
console.log(cutString('andrea')) */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*function giveMeRandom(n){
    let arr = []
    for(i = 0; i<n ; i++){
        arr.push(Math.floor(Math.random()*10))
    }
    return arr
}
console.log(giveMeRandom(10))*/