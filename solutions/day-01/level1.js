// Declare an empty array
const arr = Array(); 
console.log(arr);

// Declare an array with more than 5 number of elements
const numbers = [1,2,3,4,5];
console.log(numbers);

// Find the length of your array
console.log(numbers.length);

// Get the first item, the middle item and the last item of the array
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixed = [0, 2, 'Vandesh', [5, 7], 3.6, 'banana'];
console.log(mixed.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// Print out each company
itCompanies.forEach(itCompanies => console.log(itCompanies));

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + ' are big IT companies');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = "Facebook";
const exist = itCompanies.includes(company);
exist ? console.log(company + ' is found') : console.log(company + ' is not found');

// Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies.filter(o));

// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies