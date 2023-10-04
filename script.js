// JavaScript for handling the login form
const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // You would typically perform an AJAX request to authenticate the user here
    // For simplicity, we'll just show/hide the dashboard based on a hardcoded condition
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
    
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
