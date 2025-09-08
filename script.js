// -------------------
// Part 1: Event Handling
// -------------------

// Counter functionality
let count = 0;
const counterBtn = document.getElementById("counter-btn");
const counterValue = document.getElementById("counter-value");

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// -------------------
// Part 2: Interactive Elements
// -------------------

// FAQ toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});


// -------------------
// Part 3: Form Validation
// -------------------

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop actual form submission

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("form-success").classList.add("hidden");

  let isValid = true;

  // Name validation: must not be empty and at least 2 chars
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("name-error").textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  // Email validation: regex check
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation: min 6 chars, at least one number
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("password-error").textContent = "Password must be 6+ characters with at least one number.";
    isValid = false;
  }

  // Success feedback
  if (isValid) {
    document.getElementById("form-success").classList.remove("hidden");
    form.reset();
  }
});
