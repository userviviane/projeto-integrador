document.getElementById("formCadastroMedico").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const crm = document.getElementById("crm").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const especializacao = document.getElementById("especializacao").value;

    const medico = { nome, crm, email, telefone, especializacao };

    // Armazenar no LocalStorage
    const medicos = JSON.parse(localStorage.getItem("medicos")) || [];
    medicos.push(medico);
    localStorage.setItem("medicos", JSON.stringify(medicos));

    alert("Médico cadastrado com sucesso!");
    this.reset();
});
