function calculateSumAndAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return { sum: 0, average: 0 };
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  const average = sum / numbers.length;

  return { sum, average };
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateSumAndAverage(numbers);

console.log(`Total Sum: ${result.sum}`);
console.log(`Average: ${result.average}`);
