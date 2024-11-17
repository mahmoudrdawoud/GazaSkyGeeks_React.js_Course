// Function to validate an email address
function isValidEmail(email) {
    // Regular expression for validating the email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email against the regex and return the result (true or false)
    return emailRegex.test(email);
}
// A valid email for testing
var email1 = "example@domain.com";
// An invalid email for testing
var email2 = "invalid-email";
// Log the result using string interpolation (make sure to use backticks)
console.log("".concat(email1, " is valid: ").concat(isValidEmail(email1)));
// Log the result for the invalid email
console.log("".concat(email2, " is valid: ").concat(isValidEmail(email2)));
