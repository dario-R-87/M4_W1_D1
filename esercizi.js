/*			ESERCIZIO 1			*/

const checkNum = function(x,y){
 let result = false;
 let sum = x+y;
 if(x===50 || y === 50 || sum === 50)
  result = true;

 return result;
}

console.log(checkNum(5,55));
console.log(checkNum(7,50));
console.log(checkNum(5,45));
console.log(checkNum(55,45));

/*********************************************************/

/*			ESERCIZIO 2			*/

const deleteChar = function(str,pos){
 let result = "";
 const strArr = str.split("");
 strArr.splice(pos, 1);
 result = strArr.join("");
 return result;
}

console.log(deleteChar("ciao",1));


/*********************************************************/

/*			ESERCIZIO 3			*/

const checkNum2 = function(x,y){

 if(x<40 || (x>60 && x<70) || x>100)
  return false;

 if(y<40 || (y>60 && y<70) || y>100)
  return false;

 return true;
}

console.log(checkNum2(5,65));
console.log(checkNum2(7,50));
console.log(checkNum2(80,4));
console.log(checkNum2(75,45));
console.log(checkNum2(59,99));

/*********************************************************/

/*			ESERCIZIO 4			*/

const cityName = function(city){
 let start = city.trim().substring(0, 3);
 if(start.toLowerCase()==="los" || start.toLowerCase()==="new")
  return city
 else
  return false;
}

console.log(cityName("Florida"));
console.log(cityName("New Jersey"));
console.log(cityName("Los Angeles"));
console.log(cityName("San Francisco"));


/*********************************************************/

/*			ESERCIZIO 5			*/

const arraySum = function(arr){
 let sum=0;
 for(const item of arr){
  sum += item;
 }

 return sum;
}

const arr=[5,4,5,8,9,7,1,5,6,3,2,5,7,5,5555];
console.log(arraySum(arr));

/*********************************************************/