// Registration page for User

const userName = document.getElementById("user_name");
const userEmail = document.getElementById("email");
const userPhone = document.getElementById("phone");
const userPassword = document.getElementById("password");

function validateRegistration() {
    const password = userPassword.value;

    if (!isValidPassword(password)) {
        alert('Password must contain at least one uppercase letter, one number, and one special character.');
        return false;
    }
    window.location.href = "Dashboard.html";
    return false;
}

function isValidPassword(password) {
    
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    return uppercaseRegex.test(password) &&
           numberRegex.test(password) &&
           specialCharRegex.test(password) && lowercaseRegex.test(password);
}