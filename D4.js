/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
  return l1 * l2;
};

// console.log(area(2, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};

// console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num1) {
  const num2 = 19;
  if (num1 > num2) {
    return (num1 - num2) * 3;
  } else {
    return Math.abs(num1 - num2);
  }
};

// console.log(crazyDiff(9));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((20 < n && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

// console.log(boundary(100));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  const epiStr = "EPICODE";
  if (str.startsWith(epiStr)) {
    return str;
  } else {
    return epiStr.concat(" ", str);
  }
};

// console.log(epify("EPICODuno due tre"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num) {
  if ((num % 3 === 0 || num % 7 === 0) && num > 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(check3and7(13));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  let nStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    nStr = nStr.concat(str[i]);
  }
  return nStr;
};

//console.log(reverseString("abcd efg"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  let nStr = str.split(" ");
  for (let i = 0; i < nStr.length; i++) {
    nStr[i] = nStr[i][0].toUpperCase().concat(nStr[i].substring(1));
  }
  return nStr.join(" ");
};

console.log(upperFirst("uno due tre 4quattro"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  return str.slice(0, -1).slice(1, str.length);
};

// console.log(cutString("abcdefg"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let nArray = [];
  for (let i = 0; i < n; i++) {
    nArray.push(Math.floor(Math.random() * 11));
  }
  return nArray;
};

//console.log(giveMeRandom(33));
