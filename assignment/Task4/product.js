// Function to calculate the total price of all products
// Accepts an array of Product objects and returns the total price
function calculateTotalPrice(products) {
    // Use the reduce method to sum up the prices
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// Create an array of products following the Product interface
var products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
];
// Call the function to calculate the total price
var totalPrice = calculateTotalPrice(products);
// Log the total price to the console
console.log("Total Price: $".concat(totalPrice));
