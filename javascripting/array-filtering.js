/*
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    filtered = numbers.filter(evenNumbers);

console.log(filtered);

function evenNumbers(number) {
  return number % 2 === 0;
}
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    filtered = numbers.filter(function evenNumbers(number) {
  return number % 2 === 0;
});

console.log(filtered);