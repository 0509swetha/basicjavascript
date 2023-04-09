let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  } else {
    oddSum += numbers[i];
  }
}

console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);
