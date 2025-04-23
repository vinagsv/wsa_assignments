document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const userName = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;
    const country = document.getElementById("country").value;
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const phone = document.getElementById("phone").value.trim();
    const altEmail = document.getElementById("altEmail").value.trim();
    const terms = document.getElementById("terms").checked;
    const message = document.getElementById("message");

    // Validation
    if (!firstName || !lastName) {
      message.textContent = "First Name and Last Name are required.";
      return;
    }

    if (userName.length < 8) {
      message.textContent = "User Name must be at least 8 characters.";
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
      message.textContent =
        "Password must be 6-20 characters and include at least one numeric digit, one uppercase, and one lowercase letter.";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      return;
    }

    if (!month || !day || !year) {
      message.textContent = "Complete your birthday information.";
      return;
    }

    if (country === "") {
      message.textContent = "Please select your country.";
      return;
    }

    if (!male && !female) {
      message.textContent = "Please select your gender.";
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      message.textContent = "Phone number must be exactly 10 digits.";
      return;
    }

    if (!altEmail) {
      message.textContent = "Alternative email address is required.";
      return;
    }

    if (!terms) {
      message.textContent = "You must agree to the terms of service.";
      return;
    }

    // all validations passed
    message.textContent = "Welcome! Your form has been successfully submitted.";
    message.style.color = "green";
  });
