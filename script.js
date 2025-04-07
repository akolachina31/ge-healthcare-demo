const roles = {
    admin: { password: "admin123", role: "Admin" },
    exec: { password: "exec123", role: "Executive" },
    user: { password: "user123", role: "End User" }
};

// Validate login form before submitting
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return false;
    }

    login(); // Call actual login function
    return false; // Prevent default form submission
}

// Login logic
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (roles[username] && roles[username].password === password) {
        sessionStorage.setItem("userRole", roles[username].role);
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
}

// Set role-based visibility
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

// Logout
function logout() {
    sessionStorage.clear();
}

// Load product details dynamically
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product") || "Unknown Product";

    document.getElementById("product-name").innerText = product;
    document.getElementById("product-desc").innerText = `${product} is a state-of-the-art GE Healthcare solution that advances patient care through innovation.`;
}

// FAQ toggle
function toggleFaq(id) {
    const faq = document.getElementById(id);
    if (faq) {
        faq.style.display = (faq.style.display === "none") ? "block" : "none";
    }
}