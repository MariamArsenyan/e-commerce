function validate() {
    event.preventDefault();

    const fName = document.getElementById('fName');
    const fLastN = document.getElementById('fLastN');
    const fEmail = document.getElementById('fEmail');
    const fAddress = document.getElementById('fAddress');
    const fPassword = document.getElementById('fPassword');
    const fPhone = document.getElementById('fPhone');

    
    let isValid = true;

    if (!validateText(fName, 3)) isValid = false;
    if (!validateText(fLastN, 3)) isValid = false;
    if (!validateEmail(fEmail)) isValid = false;
    if (!validateText(fAddress, 3)) isValid = false;
    if (!validatePassword(fPassword)) isValid = false;
    if (!validatePhone(fPhone)) isValid = false;

    if (isValid) {
        alert("Form submitted successfully!");
        document.querySelector("form").submit();
    }
}

function validateText(input, minLength) {
    const regex = /^[a-zA-Z]+$/; 
    if (input.value.length < minLength || !regex.test(input.value)) {
        setError(input, `This field is required and must have at least ${minLength} characters.`);
        return false;
    } else {
        clearError(input);
        return true;
    }
}

function validateEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!regex.test(input.value) || input.value.length < 3) {
        setError(input, "This field is required and must be a valid email.");
        return false;
    } else {
        clearError(input);
        return true;
    }
}

function validatePassword(input) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/; 
    if (!regex.test(input.value)) {
        setError(input, "Password must contain letters and numbers, and be 4-8 characters long.");
        return false;
    } else {
        clearError(input);
        return true;
    }
}

function validatePhone(input) {
    const regex = /^\d{9}$/; 
    if (!regex.test(input.value)) {
        setError(input, "Phone number must contain exactly 9 digits.");
        return false;
    } else {
        clearError(input);
        return true;
    }
}

function setError(input, message) {
    input.classList.add('is-invalid');
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
}


function clearError(input) {
    input.classList.remove('is-invalid');
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = '';
}
