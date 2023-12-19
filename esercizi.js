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
