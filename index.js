// CHALLENGE 1: Reverse a String ///

function reverseStr(str) {
  //////////////////
  //       return str.split('').reverse().join('');
  //   ///////////////////
  //     //   let revString = '';
  //     //   for(let i = str.length - 1; i>=0; i--){
  //     //       revString = revString + str[i];
  //     //   }
  //     //   return revString;
  //       //////////////////////////
  //       let revString = '';
  //       for(let char of str){
  //           revString = char + revString;
  //       }
  //       return revString
  /////////////////////////
  //   let revString = '';
  //   str.split('').forEach((char) =>                //.split turns string into an array, .forEach is a high order array method that takes 
  //       revString = char + revString);             // each member of array oe y one and applies the function on it
  //       return revString;
  //////////////////////////////////////////////

  return str.split('').reduce(function(revString, char){
  return  char + revString; })
}


//////////////Function to find if Palindrome/////////

function isPalindrome(str){
      revString = str.split('').reverse().join('');

      return str === revString;


}


////////////Reverse Integer/////////////

function reverseInt(int){
      const revInt = int.toString().split('').reverse().join('');
      return parseInt(revInt) * Math.sign(int);              //parseInt() turns a string into Int
}

//////////////////// Capitilize Letters ////////////////////

function capitalizeLetters(str){
      // const strArr = str.toLowerCase().split(' ');                   //words into an Array

      // for(let i = 0; i< strArr.length; i++){
      //       strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);    

      // }

      // return strArr.join(' ');

      ///////////////////////////////////////////

      // return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')

      ////////////////////////

      return str.replace(/\b[a-z]/gi, function(char){return  char.toUpperCase(); });
}

////////////////////////////////// Max Character //////////////////////

function maxCharacter(str){
      const charMap = {};
      let maxNum = 0;
      let maxChar = '';

      str.split('').forEach(function(char){
            if(charMap[char]){
            charMap[char]++
            }
            else{
            charMap[char] = 1;
            }
      });
      
      console.log(charMap);


      for(let char in charMap){

            if(charMap[char] > maxNum){
                  maxNum = charMap[char];
                  maxChar = char;
            }
      }

      return maxChar;


}

////////// Print Numbers from 1 to 100, for Multiples of three return fizz, for multiples of 5 return 5,
////////// for multiples of 3 and 5 return fizzbuzz

function fizz(){
      for( let i=1; i<=100; i++){
            if(i % 3 === 0 && i % 5 === 0){
                  console.log('fizzBuzz')
            }
            else if(i % 3 === 0){
                  console.log('fizz')
            }
            else if(i % 5 === 0){
                  console.log('buzz')
            }
            else{
            console.log(i)
            }
      }


}

//////// Sort by longest word ///////

      

function longestWord(str){


      const strArr = str.toLowerCase().match(/[a-z0-9]+/g);

      const sorted = strArr.sort((a,b) =>
            b.length - a.length
      );


      const longestWordArr = sorted.filter((word) =>
             word.length === sorted[0].length )

      if(longestWordArr.length === 1){
            return longestWordArr[0];
      }
      else{
            return longestWordArr;
      }


}


///////////////////CHUNK ARRAYS INTO A SPECIFIC LENGTH////////////////////////

function chunkArr(arr, len){

      

      //solution using while loop


      // const chunkedArr = [];
      // let i = 0;

      // while(i<arr.length){
      //       chunkedArr.push(arr.slice(i, i+len));

      //       i += len;
      // }

      // return chunkedArr;

/////////   USING forEach() Loop /////////

const chunkedArr = [];

arr.forEach(function (val){

      const last = chunkedArr[chunkedArr.length -1];

      if(!last || last.length === len){
            chunkedArr.push([val])
      }
      else{
            last.push(val)
      }
})

return chunkedArr;

};


//////////// Flatten Arrays into Arrays into a single Array ///////////////


function flattenArr(arrays){

      //// Using Reduce MEthod ////
      // return arrays.reduce(function(a,b){
      //       return a.concat(b);
      // })

      /////// Using Apply Method ////////

      // return [].concat.apply([], arrays)


      /////// USING SPREAD OPERATOR ////////

      return [].concat(...arrays)

}


//////////////// Find if words are Anagram ////////

function isAnagram(str1, str2){
      return formatStr(str1) === formatStr(str2);

}

            // helper function to format the strings 

            function formatStr(str){
                  return str.replace(/[^\w]/g, '')   //replaces evertything with a null except alphabetic characters & numbers
                  .toLowerCase()
                  .split('')               //turns strings into an array
                  .sort()                 //Sorts in Alphabetical order
                  .join('')               //Joins Array into string  
            }


/////////// Replace character with upcoming character and capitilize Vowel

function letterChanges(str){

      let newString = str.toLowerCase().replace(/[a-z]/gi, char => {
            if(char === 'z'|| char === 'Z'){
                  return 'a'
            }
            else{
                  return String.fromCharCode(char.charCodeAt() + 1)
            }
      })

      newString = newString.replace(/a|e|i|o|u/gi, vowel => {
            return vowel.toUpperCase();
      })

      return newString
}

/////////// ADd all the parameters without using arrays

// function addAll(){

      ////// Using javaScript ES5/////////////////


      // var args = Array.prototype.slice.call(arguments);
      // var total = 0;

      // for(var i = 0; i<args.length; i++){
      //       total += args[i]
      // }
//       return total;

// }
      ///////// using javaScript ES6 rest operator/////////////

function addAll(...numbers){

      /////// using for each ///////

      // return numbers.forEach(num => total += num);

      /////// using reduce function and accumulator//

      return numbers.reduce((acc, cur) => acc + cur)
}


//////// Sum of all prime numbers //////////////

function sumAllPrimes(num){
      let total = 0;

      //this function takes a number i and check if it's equally divisible by any number below it, if it is divisible then it is not prime number and returns false, if it is not devisible, then it is a prime number and returns true.

      function checkPrime(i){
            for( let j = 2; j<i ; j++){
                  if(i % j === 0){
                        return false;
                  }
            }
            return true
      }

      // this for loops call the upper checkPrime funtion, if the output is true, then it adds the value of i(upper functions output) into total

      for(let i = 2; i<=num; i++){
            if(checkPrime(i)){
                  total += i;
            }
      }
      return total;
}


/////////// seek and destroy everything is in arguments from array ////////

///// solution 1

// function seekAndDestroy(arr){

      // let args = Array.from(arguments); //takes all the parameters and turns it into an Array

      // return arr.filter(function filterArr(arr){      
      //       return args.indexOf(arr) === -1;          // returns true if NOT in the array
      // })

      
// }

// solution 2 using rest operator

function seekAndDestroy(arr, ...rest){
      return arr.filter(val => !rest.includes(val)) //includes method returns true if val is present in rest, but here it will return false
}                                                   // becuase of ' ! ' ;

/////// sort by height wihtout moving the trees

function sortByHeight(a){
      // const arr1 = [];
      // const arr2 = [];

      // a.forEach((val, i) => {
      //       if(val === -1){
      //             arr1.push(i)
      //       }
      //       else{
      //             arr2.push(val)
      //       }
      // });

      // const sortArr = arr2.sort((a,b) =>  a - b )

      // arr1.forEach((val, i) => sortArr.splice(arr1[i],0,-1));

      // return sortArr;
}

//////////// FIND THE MISSING CHARACTER //////////////

function missingChar(str){
      let compare = str.charCodeAt(0)
      let missing;
      str.split('').map((char,i) => {
            if(str.charCodeAt(i) === compare){
                  compare++
            }
            else{
                  missing = String.fromCharCode(compare)
            }
      })
      return missing;
}

////////// sum of even and odd numbers

function evenOddSum(arr){

      //Brad's Solution
      
      // let evenSum = 0;
      // let oddSum = 0;
      // arr.forEach((num) => (num % 2 ===0 ? (evenSum += num) : (oddSum += num)))
      // return [evenSum, oddSum];



      // My Solution

      let evenSum = 0;
      let oddSum = 0;

            for(let i=0; i<arr.length; i++){
            //using Ternary Operator      
            arr[i]%2===0? (evenSum += arr[i]) : (oddSum += arr[i])
            
            //using if Statement
            // if(arr[i]%2===0){
            //       evenSum += arr[i]
            // }
            // else{
            //       oddSum += arr[i]
            // }
      }
      return [evenSum, oddSum]
}

// Function Call //
console.log(reverseStr('hi Ahsan!'))