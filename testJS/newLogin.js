// Sample username and password for validation
const validUsername = "user123";
const validPassword = "password123";

// Function to validate login form
function validateLogin() {
  // Get the form inputs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Get the error message div
  const errorMessage = document.getElementById('error-message');
  
  // Clear any previous error messages
  errorMessage.textContent = '';

  // Simple validation
  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required!";
    return false; // Prevent form submission
  }

  // Check if username and password match
  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    return true; // Allow form submission
  } else {
    errorMessage.textContent = "Invalid username or password.";
    return false; // Prevent form submission
  }
}
