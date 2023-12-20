/*			ESERCIZIO 1			*/

const checkNum = function (x, y) {
  let result = false;
  let sum = x + y;
  if (x === 50 || y === 50 || sum === 50) result = true;

  return result;
};

console.log(checkNum(5, 55));
console.log(checkNum(7, 50));
console.log(checkNum(5, 45));
console.log(checkNum(55, 45));

/*********************************************************/

/*			ESERCIZIO 2			*/

const deleteChar = function (str, pos) {
  let result = "";
  const strArr = str.split("");
  strArr.splice(pos, 1);
  result = strArr.join("");
  return result;
};

console.log(deleteChar("ciao", 1));

/*********************************************************/

/*			ESERCIZIO 3			*/

const checkNum2 = function (x, y) {
  if (x < 40 || (x > 60 && x < 70) || x > 100) return false;

  if (y < 40 || (y > 60 && y < 70) || y > 100) return false;

  return true;
};

console.log(checkNum2(5, 65));
console.log(checkNum2(7, 50));
console.log(checkNum2(80, 4));
console.log(checkNum2(75, 45));
console.log(checkNum2(59, 99));

/*********************************************************/

/*			ESERCIZIO 4			*/

const cityName = function (city) {
  let start = city.trim().substring(0, 3);
  if (start.toLowerCase() === "los" || start.toLowerCase() === "new")
    return city;
  else return false;
};

console.log(cityName("Florida"));
console.log(cityName("New Jersey"));
console.log(cityName("Los Angeles"));
console.log(cityName("San Francisco"));

/*********************************************************/

/*			ESERCIZIO 5			*/

const arraySum = function (arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }

  return sum;
};

const arr = [5, 4, 5, 8, 9, 7, 1, 5, 6, 3, 2, 5, 7, 5, 5555];
console.log(arraySum(arr));

/*********************************************************/

/*			ESERCIZIO 6			*/

const arrayCheck = function (arr) {
  for (const item of arr) {
    if (item === 1 || item === 3) return false;
  }

  return true;
};

const arr2 = [1, 5, 4, 5, 8, 9, 7, 10, 5, 6, 30, 2, 5, 7, 5, 5555];
console.log(arrayCheck(arr2));

/*********************************************************/

/*			ESERCIZIO 7			*/

const angleType = function (deg) {
  if (deg < 90) return "acuto";
  if (deg === 90) return "retto";
  if (deg < 180) return "ottuso";
  if ((deg = 180)) return "piatto";
};

console.log(angleType(45));
console.log(angleType(90));
console.log(angleType(144));
console.log(angleType(180));

/*********************************************************/

/*			ESERCIZIO 8			*/

const createAcr = function (str) {
  const arr = str.trim().split(" ");
  let acr = "";
  for (const item of arr) {
    acr += item.substring(0, 1).toUpperCase();
  }
  return acr;
};

console.log(createAcr("federazione italiana giuoco calcio"));
console.log(createAcr("hyper text markup language"));
console.log(createAcr("agenzia delle entrate"));

/*********************************************************/

/*			ESERCIZIO extra 1			*/

const charMostApp = function (str) {
  const arr = str.trim().split("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
    ",",
    ".",
    "!",
    "?",
    ";",
    ":",
    "-",
    "_",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
  ];
  const frequency = [];
  for (i = 0; i < alphabet.length; i++) {
    frequency[i] = 0;
  }
  for (i = 0; i < arr.length; i++) {
    frequency[alphabet.indexOf(arr[i])]++;
  }
  let max = frequency[0];
  let indexOfMax = 0;
  for (i = 0; i < frequency.length; i++) {
    if (frequency[i] > max) {
      max = frequency[i];
      indexOfMax = i;
    }
  }
  return alphabet[indexOfMax];
};

console.log(
  charMostApp("aaaaaa bbbbbbbbb fdsafasoi oisdsdfoajh fdo zzzzzzzzzz zzz zzz ")
);
console.log(charMostApp("ciao come stai tutto bene ??????"));

console.log(charMostApp("oggi è proprio una bellissima giornata!"));
/*********************************************************/

/*			ESERCIZIO extra 2			*/

const anagramCheck = function (first, second) {
  first_arr = first.split("");
  second_arr = second.split("");
  for (let i = 0; i < first_arr.length; i++) {
    if (first_arr[i] === " ") first_arr.splice(i, 1);
  }
  for (let i = 0; i < second_arr.length; i++) {
    if (second_arr[i] === " ") second_arr.splice(i, 1);
  }
  if (first_arr.length !== second_arr.length) {
    return false;
  }

  let index;
  for (let i = 0; i < first_arr.length; i++) {
    index = second_arr.indexOf(first_arr[i]);
    if (index >= 0) {
      second_arr.splice(index, 1);
    }
  }
  if (second_arr.length === 0) {
    return true;
  }
  return false;
};
console.log(anagramCheck("roma", "ramo"));
console.log(anagramCheck("salsa", "salas"));
console.log(anagramCheck("ciao come stai", "tutto bene"));
console.log(anagramCheck("quanti anni hai", "inna iahitnauq"));
/*********************************************************/

/*			ESERCIZIO extra 3			*/

const anagramListCheck = function (arr, word) {
  word_split = word.split("");
  const arr_anag = [];

  for(let x=0; x<arr.length; x++){
  item_split = arr[x].split("");

  if (item_split.length !== word_split.length) {
    continue;
  }

  let index;
  for (let i = 0; i < word_split.length; i++) {
    index = item_split.indexOf(word_split[i]);
    if (index >= 0) {
      item_split.splice(index, 1);
    }
  }
  if (item_split.length === 0) {
    arr_anag.push(arr[x]);
  }
  }
  return arr_anag;
};
console.log(anagramListCheck(["omar","roma","radio","armadio","amor","maro","rama"], "ramo"));
/*********************************************************/

/*			ESERCIZIO extra 4			*/

const palindCheck = function (str) {
 for(let i=0; i<str.length; i++){
  if((str.length-2*i-1)>=1){
   if(str.charAt(i)!==str.charAt(str.length-i-1))
    return false;
  }
 }
 return true;
};
console.log(palindCheck("itopinonavevanonipoti"));
console.log(palindCheck("tavolino"));
console.log(palindCheck("osso"));
console.log(palindCheck("abcdefedcba"));
console.log(palindCheck("cellulare"));
/*********************************************************/

/*			ESERCIZIO extra 5			*/

const numInvert = function (n){
 n = n+"";
 const n_split = n.split("");
 const arr_reverse = n_split.reverse();
 const str_reverse = arr_reverse.join("");
 return parseInt(str_reverse);
 
};
console.log(numInvert(65498));
console.log(numInvert(123456789));

/*********************************************************/

/*			ESERCIZIO extra 6			*/

const stairs = function (x){
 let stairs_str = "";
 for(let i=0; i<x; i++){
  for(let y=0; y<i+1; y++){
   stairs_str += "#";
  }
  stairs_str += "\n";
 } 
 return stairs_str;
};
console.log(stairs(5));
console.log(stairs(17));

/*********************************************************/

/*			ESERCIZIO extra 7			*/

const strInvert = function (str){
 let invStr="";
 for(let i=str.length-1; i>=0; i--){
  invStr+=str.charAt(i);
 }
 return invStr;
};
console.log(strInvert("Hello World!"));


/*********************************************************/

/*			ESERCIZIO extra 8			*/

/*const arraySplit = function (array,y){

};
console.log();*/


/*********************************************************/


/*
8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
Es.
X = 3
' # '
' ### '
'#####'
10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
Es. N = 2
[[1, 2],[4, 3]]
N = 3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]
N = 4
[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]*/