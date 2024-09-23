$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();

        $.ajax({
            url: 'https://reqres.in/api/login',
            type: 'POST',
            data: JSON.stringify({ email, password }),
            contentType: 'application/json',
            beforeSend: function() {
                $('#error-message').text('Carregando...');
            },
            success: function(response) {
                localStorage.setItem('token', response.token); 
                localStorage.setItem('email', email); 
                window.location.href = 'home.html';
            },
            error: function() {
                $('#error-message').text('Erro: e-mail ou senha inválidos.');
            }
        });
    });
});
