// ----01-- celsius-To-Fahrenheit

function celsiusToFahrenheit(celsius) {
    return celsius*(9/5)+32;
  }
  
  console.log(celsiusToFahrenheit(0)); 
  console.log(celsiusToFahrenheit(25)); 

// -----02---is-Even

  function isEven(num) {
    return num % 2 == 0;
  }
  
  console.log(isEven(4)); 
  console.log(isEven(7)); 

// -----03--sum

  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4));
  console.log(sum(10, 20)); 
// ------04

  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9]));
  console.log(findSmallestNum([-1, -5, 0, 10])); 

  // ----06
  function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); 
  console.log(getFirstElement(["a", "b", "c"])); 


  // -----07 
  function isArrayEmpty(arr) {
    return  arr == "";
  }
  
  console.log(isArrayEmpty([])); 
  console.log(isArrayEmpty([1, 2, 3])); 
  // -----10
    function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); 
  console.log(toLowerCase("JavaScript")); 

  // ----11
  function stringLength(str) {
  
    return str.length;
  }
  
  console.log(stringLength("hello")); 
  console.log(stringLength("world")); 
  // ----12
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
 
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
  console.log(mergeArrays(["a", "b"], ["c", "d"])); 
   // 13---was`nt  completed yet
  
  // ----14
  function getFirstCharacter(str) {
    return str.charAt(0);
  }
  
  console.log(getFirstCharacter("hello")); 
  console.log(getFirstCharacter("world")); 
  
// 15
  function sumArray(arr) {
    let i = 0;
    for (let num of arr) {
      i += num;
    }
    return i;
  }
  
  console.log(sumArray([1, 2, 3, 4]));    
  console.log(sumArray([-1, -2, -3, -4])); 
  console.log(sumArray([1.5, 2.5, 3.5]));  
  





