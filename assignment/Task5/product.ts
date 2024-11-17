// Function to validate an email address
function isValidEmail(email: string): boolean {
    // Regular expression for validating the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regex and return the result (true or false)
    return emailRegex.test(email);
}

// A valid email for testing
const email1 = "example@domain.com";
// An invalid email for testing
const email2 = "invalid-email";

// Log the result using string interpolation (make sure to use backticks)
console.log(`${email1} is valid: ${isValidEmail(email1)}`);
// Log the result for the invalid email
console.log(`${email2} is valid: ${isValidEmail(email2)}`);