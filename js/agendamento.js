console.log("Baby Connect - Agendamento");

// Exemplo de pediatras disponíveis por clínica
const pediatrasPorClinica = {
    Clinica1: ["Dr. João Silva", "Dra. Ana Clara"],
    Clinica2: ["Dr. Pedro Lima", "Dra. Mariana Santos"]
};
console.log
// Popula os pediatras dinamicamente com base na clínica selecionada
document.getElementById("clinicaSelect").addEventListener("change", function () {
    const clinica = this.value;
    const pediatraSelect = document.getElementById("pediatraSelect");
    pediatraSelect.innerHTML = '<option value="" selected>Selecione um pediatra</option>';

    if (clinica && pediatrasPorClinica[clinica]) {
        pediatrasPorClinica[clinica].forEach(pediatra => {
            const option = document.createElement("option");
            option.value = pediatra;
            option.textContent = pediatra;
            pediatraSelect.appendChild(option);
        });
    }
});

// Validação e salvamento do agendamento
document.getElementById("formAgendamento").addEventListener("submit", function (event) {
    event.preventDefault();

    const clinica = document.getElementById("clinicaSelect").value;
    const pediatra = document.getElementById("pediatraSelect").value;
    const data = document.getElementById("dataConsulta").value;
    const hora = document.getElementById("horaConsulta").value;

    if (!clinica || !pediatra || !data || !hora) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificar disponibilidade (simulação)
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    const conflito = agendamentos.some(a => a.pediatra === pediatra && a.data === data && a.hora === hora);

    if (conflito) {
        alert("Horário já ocupado! Escolha outro horário.");
        return;
    }

    // Salvar agendamento
    agendamentos.push({ clinica, pediatra, data, hora });
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    // Mostrar mensagem de sucesso
    const mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.classList.remove("d-none");
    setTimeout(() => mensagemSucesso.classList.add("d-none"), 3000);

    // Resetar formulário
    this.reset();
});
