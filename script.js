// login-logic.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const identifier = document.getElementById('identifier').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // SIMULATION: In a real app, use fetch() to call your backend
    console.log(`Attempting login for: ${identifier}`);

    // Mock logic for demonstration
    if (identifier === "admin@test.com" && password === "password123") {
        handleRedirection("admin");
    } else if (identifier === "user@test.com" && password === "password123") {
        handleRedirection("user");
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.textContent = "Invalid credentials. Try admin@test.com / password123";
        errorMsg.style.display = "block";
    }
});

function handleRedirection(role) {
    // Role-based logic
    const routes = {
        admin: "/admin/dashboard",
        manager: "/manager/panel",
        user: "/home"
    };

    window.location.href = routes[role] || "/dashboard";
}