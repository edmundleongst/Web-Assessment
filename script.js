// Auto-popup modal after 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const ctaModal = new bootstrap.Modal(document.getElementById("ctaModal"));
    ctaModal.show();
  }, 3000);
});

// Handle sign-up form submission
document.getElementById("signUpForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    alert(`Welcome ${name}, you have been signed in successfully.`);
  } else {
    alert("Please fill in all the fields.");
  }
});

// Handle subscription form submission
document.getElementById("subscriptionForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("subscribeName").value;
  const email = document.getElementById("subscribeEmail").value;

  if (name && email) {
    alert(`Thank you, ${name}! You have subscribed to our newsletter successfully.`);
  } else {
    alert("Please enter both your name and email.");
  }
});