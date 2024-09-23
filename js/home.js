document.addEventListener('DOMContentLoaded', function() {
    const email = localStorage.getItem('email');
    document.getElementById('user-email').textContent = email;
});
