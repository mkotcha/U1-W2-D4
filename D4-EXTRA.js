// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const giveMeRandom = function (n) {
  let nArray = [];
  for (let i = 0; i < n; i++) {
    nArray.push(Math.floor(Math.random() * 11));
  }
  return nArray;
};

const checkArray = function (array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(array[i], "> 5");
      count++;
    } else {
      console.log(array[i], "<= 5");
    }
  }
  return count;
};

//console.log(checkArray(giveMeRandom(7)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    price: 12,
    name: "A",
    id: "ab34",
    quantity: 1,
  },
  {
    price: 31,
    name: "B",
    id: "vf76",
    quantity: 2,
  },
  {
    price: 14,
    name: "C",
    id: "yt46",
    quantity: 1,
  },
  {
    price: 1,
    name: "D",
    id: "ty57",
    quantity: 3,
  },
  {
    price: 18,
    name: "E",
    id: "aq23",
    quantity: 1,
  },
  {
    price: 71,
    name: "F",
    id: "er87",
    quantity: 2,
  },
  {
    price: 14,
    name: "G",
    id: "we98",
    quantity: 1,
  },
];

const shoppingCartTotal = function () {
  let tot = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    tot += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return tot;
};

// console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const addToShoppingCart = function (cartItem) {
  let count = 0;
  shoppingCart.push(cartItem);
  for (let i = 0; i < shoppingCart.length; i++) {
    count += shoppingCart[i].quantity;
  }
  return count;
};

//console.log(addToShoppingCart({ price: 42, name: "H", id: "wx28", quantity: 4 }));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (shopCart) {
  let maxIndex = -1;

  for (let i = 1; i < shopCart.length; i++) {
    if (shopCart[i].price > shopCart[i - 1].price) {
      maxIndex = i;
    }
  }
  return shopCart[maxIndex];
};

// console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function () {
  let latest = shoppingCart.length - 1;
  return shoppingCart[latest];
};

// console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

const loopUntil = function (num) {
  let counter = 0;
  let lastFlag = true;
  while (counter < 3) {
    let rand = Math.floor(Math.random() * 10);
    console.log(rand);
    if (rand > num) {
      if (lastFlag === true) {
        counter++;
      } else {
        counter = 1;
        lastFlag = true;
      }
    } else {
      counter = 0;
      lastFlag = false;
    }
  }
};

// loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const average = function (array) {
  let counter = 0;
  let subTot = 0;
  for (i = 0; i < array.length; i++)
    if (typeof array[i] === "number") {
      subTot += array[i];
      counter++;
    }
  return subTot / counter;
};

// console.log(average([5, "test", 5, "yo", 5, "15", 5]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const longest = function (array) {
  let longestIndex = -1;
  let longestValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestValue) {
      longestIndex = i;
      longestValue = array[i].length;
    }
  }
  return array[longestIndex];
};

// console.log(longest(["short", "longlonglonglong", "midmidmid", "midmidmidmid"]));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

const notSpam = function (emailContent) {
  if (emailContent.search(/SPAM/i) < 0 && emailContent.search(/SCAM/i) < 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(notSpam("Lorem ipsum is placeholder SPam commonly used in the graphic, print."));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

const dayPass = function (dateParam) {
  const dateNow = Date.now();
  let timePass = dateNow - dateParam;
  timePass /= 1000 * 3600 * 24;
  return Math.trunc(timePass);
};

// console.log(dayPass(Date.parse("05 jul 2023")));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const matrixGenerator = function (x, y) {
  let myMatrix = [];
  for (let i = 0; i < y; i++) {
    myMatrix[i] = [];
    for (let j = 0; j < x; j++) {
      myMatrix[i][j] = i.toString() + j.toString();
    }
  }
  return myMatrix;
};

// console.log(matrixGenerator(3, 2));
