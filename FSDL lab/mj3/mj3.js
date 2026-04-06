document.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  username.addEventListener("input", validateUsername);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);
});

function setError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.innerText = message;
  errorElement.style.opacity = "1";
}

function clearError(id) {
  const errorElement = document.getElementById(id);
  errorElement.innerText = "";
  errorElement.style.opacity = "0";
}

function validateUsername() {
  const username = document.getElementById("username").value;
  const input = document.getElementById("username");

  if (username.length < 3) {
    setError("usernameError", "At least 3 characters required");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else {
    clearError("usernameError");
    input.classList.add("success");
    input.classList.remove("error");
    return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const input = document.getElementById("email");

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(pattern)) {
    setError("emailError", "Invalid email format");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else {
    clearError("emailError");
    input.classList.add("success");
    input.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const input = document.getElementById("password");
  const strengthText = document.getElementById("passwordStrength");

  if (password.length < 6) {
    setError("passwordError", "Minimum 6 characters");
    strengthText.innerText = "";
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else {
    clearError("passwordError");
    input.classList.add("success");
    input.classList.remove("error");

    // Strength indicator
    if (password.length < 8) {
      strengthText.innerText = "Weak 🔴";
      strengthText.style.color = "red";
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      strengthText.innerText = "Strong 🟢";
      strengthText.style.color = "green";
    } else {
      strengthText.innerText = "Medium 🟡";
      strengthText.style.color = "orange";
    }

    return true;
  }
}

function validateForm() {
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  return isUsernameValid && isEmailValid && isPasswordValid;
}