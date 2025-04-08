const credentials = {
  "admin@example.com": "admin123",
  "exec@example.com": "exec123",
  "user@example.com": "user123"
};

function validateLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }

  login();
  return false;
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (credentials[email] && credentials[email] === password) {
    sessionStorage.setItem("email", email);
    window.location.href = "home.html";
  } else {
    alert("Invalid login credentials");
  }
}

function setUserRole() {
  const role = sessionStorage.getItem("userRole");
  if (!role) {
    window.location.href = "index.html";
    return;
  }

  const roleSpan = document.getElementById("currentRole");
  if (roleSpan) roleSpan.innerText = role;

  document.querySelectorAll(".admin-only").forEach(el => el.style.display = (role === "Admin") ? "block" : "none");
  document.querySelectorAll(".exec-only").forEach(el => el.style.display = (role === "Executive") ? "block" : "none");
  document.querySelectorAll(".user-only").forEach(el => el.style.display = (role === "End User") ? "block" : "none");
}

function logout() {
  sessionStorage.clear();
}

function loadProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const product = params.get("product") || "Unknown Product";

  document.getElementById("product-name").innerText = product;
  document.getElementById("product-desc").innerText = `${product} is a state-of-the-art GE Healthcare solution that advances patient care through innovation.`;
}

function toggleFaq(id) {
  const faq = document.getElementById(id);
  if (faq) {
    faq.style.display = (faq.style.display === "none") ? "block" : "none";
  }
}