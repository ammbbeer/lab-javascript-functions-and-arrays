// Iteration #1: Find the maximum
function findMax(num1, num2) {
 if (num1 > num2) {
   return num1;
 } else {
   return num2;
 }
}


// Iteration #2 : Find the longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const empty = []
function findLongestWord(arr) {
  if(arr.length===0) {
    return null

  }

  let longest=arr[0]
  for(let i=1;i<arr.length;i++){
    if(arr[i].length>longest.lenght){
      longest=arr[i]
    }

  }
  return longest


}
console.log(findLongestWord(empty))
console.log(findLongestWord(words))

//Iteration #3: Calculate the sum
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {}
        sum+=arr[i]
   }
   return sum
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

 //Iternation #3.1: Bonus
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]; 
    if (typeof element === "number") {
      total += element; 
    } else if (typeof element === "string") {
      total += element.length; 
    } else if (typeof element === "boolean") {
      total += element ? 1 : 0;
    } else {
      throw new Error("Unsupported data type in array");
    }
  }
  return total; 
}
console.log(sum(mixedArr));

//Iteration #4 : Calculate the average
// Level 1: Array of numbers
const number= [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length === 0) return null; 
  const sum = arr.reduce((acc, curr) => acc + curr, 0); 
  return sum / arr.length; 
}
console.log(averageNumbers(number));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  if (arr.length === 0) return null; 
  const totalLength = arr.reduce((acc, curr) => acc + curr.length, 0); 
  return totalLength / arr.length;
 }
 console.log(averageWordLength(words));

// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) return null; 
  const total = arr.reduce((acc, curr) => {
    if (typeof curr === "number") {
      return acc + curr; 
    } else if (typeof curr === "string") {
      return acc + curr.length; 
    } else if (typeof curr === "boolean") {
      return acc + (curr ? 1 : 0); 
    } else {
      throw new Error("Unsupported data type in array"); 
    }
  }, 0);

  return total / arr.length; 
}
console.log(avg(mixedArr));

// Iteration #5: Unique arrays

const words = [
  
    'crab'
];

function uniquifyArray(arr) {
  if(arr.length ===0) return null;
  return arr.filter((word,index) => arr.indexOf(word) === index);
  }
 console.log(uniquifyArray(words));

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr,word) {
  if (arr.length === 0) return null; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) return true; 
  }
  return false; // Word does not exist
}
console.log(doesWordExist(words, 'truth')); 
console.log(doesWordExist(words, 'hello')); 

//Iteration #7 : Count repetition
count words = [
  'subset'
 ];
function howManyTimes(arr,word) {
  if (arr.length === 0) return 0; 
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) count++; 
  }
  return count;
}
console.log(howManyTimes(words, 'subset')); 
console.log(howManyTimes(words, 'hello'));  
