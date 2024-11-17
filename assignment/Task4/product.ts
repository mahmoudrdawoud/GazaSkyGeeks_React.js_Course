// Define an interface for Product
// Each product must have a name (string) and a price (number)
interface Product {
  name: string;
  price: number;
}

// Function to calculate the total price of all products
// Accepts an array of Product objects and returns the total price
function calculateTotalPrice(products: Product[]): number {
  // Use the reduce method to sum up the prices
  return products.reduce((total, product) => total + product.price, 0);
}

// Create an array of products following the Product interface
const products: Product[] = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
];

// Call the function to calculate the total price
const totalPrice = calculateTotalPrice(products);

// Log the total price to the console
console.log(`Total Price: $${totalPrice}`);
