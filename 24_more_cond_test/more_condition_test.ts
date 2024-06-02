//Equality and inequality Test
console.log("Equality test with strings:", "Banana" === "Banana"); //true
console.log("Equality test with strings:", "Banana" !== "Banana"); //false

//Equality and inequality Test
console.log("Inequality test with strings:", ("Banana" as string) !== "apple"); //true
console.log("Inequality test with strings:", "Banana" !== "Banana"); //false

//Tests using lowercase Function
console.log("Lowercase function test:", "HELLO WORLD".toLowerCase() === "hello world"); //true
console.log("Lowercase function test:", ("HELLO" as string) === "hello"); //false

//Numerical test involving equality 
console.log("Equality test with numbers:", 89 === 89); //true
console.log("Equality test with numbers:", 89 !== 89); //false

//Numerical test involving  inequality
console.log("Inequality test with numbers:", (29 as number) !== 89); //true
console.log("Inequality test with numbers:", (29 as number) === 89); //false

//greater than test 
console.log("Greater than test:", 10 > 5); //true
console.log("Greater than test:", 5 > 10); //false

//less than test
console.log("Less than test:", 5 < 10);//true
console.log("Less than test:", 10 < 5);//false

//greater than or equal to test
console.log("Greater than or equal to test:", 10 >= 10);//true
console.log("Greater than or equal to test:", 9 >= 10);//false

//less than or equal to
console.log("Less than or equal to test:", 5 <= 10);// true
console.log("Less than or equal to test:", 10 <= 9);//false

// Tests of "AND" operator
console.log("And operator test:", true && true);//true
console.log("And operator test:", true && false);//false

// Tests of  "OR" operator
console.log("Or operator test:", true || false);//true
console.log("Or operator test:", false || false);//false

// Test whether an item is in an array
const fruits :string[] = ["Apple", "Banana", "Mango"];
console.log("Test 'Mango' in the array:", fruits.includes("Mango")); //true
console.log("Test 'Orange' in the array:", fruits.includes("Orange")); //false

// Test whether an item is not in an array
console.log("Testing 'Orange' is not in array:", !fruits.includes("Orange")); //true
console.log("Testing 'Mango' is not in array:", !fruits.includes("Mango")); //false