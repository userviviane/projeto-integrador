document.getElementById('submitBtn').addEventListener('click', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // Impede o envio do formulário
        alert('As senhas não coincidem. Por favor, tente novamente.');
    } else {
        alert('Cadastro realizado com sucesso!');
    }
});
