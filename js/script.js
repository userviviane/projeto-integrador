console.log("Baby Connect - Interatividade inicial");

// Validação e armazenamento do agendamento
//const formAgendamento = document.getElementById('formAgendamento');
if (formAgendamento) {
    formAgendamento.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Coletando os dados do formulário
        const medico = document.getElementById('medico').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const descricao = document.getElementById('descricao').value;

        // Validando se todos os campos foram preenchidos
        if (!medico || !data || !hora || !descricao) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Armazenando os dados no localStorage
        document.getElementById('role').addEventListener('change', function () {
            const medicoExtra = document.getElementById('medicoExtra');
            medicoExtra.style.display = this.value === 'pediatra' ? 'block' : 'none';
        });
        

        alert('Consulta agendada com sucesso!');
        formAgendamento.reset(); // Limpa o formulário
    });
}

// Exibir agendamentos salvos
function exibirAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const listaAgendamentos = document.getElementById('listaAgendamentos');

    if (listaAgendamentos) {
        if (agendamentos.length === 0) {
            listaAgendamentos.innerHTML = '<p>Não há agendamentos ainda.</p>';
        } else {
            let listaHTML = '<ul class="list-group">';
            agendamentos.forEach(agendamento => {
                listaHTML += `
                    <li class="list-group-item">
                        <strong>Médico:</strong> ${agendamento.medico} <br>
                        <strong>Data:</strong> ${agendamento.data} <br>
                        <strong>Hora:</strong> ${agendamento.hora} <br>
                        <strong>Descrição:</strong> ${agendamento.descricao}
                    </li>
                `;
            });
            
        }
    }
}

// Chama a função para exibir os agendamentos ao carregar a página
window.onload = exibirAgendamentos;

// Configuração do FullCalendar
$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [
            {
                title: 'Consulta Pediátrica',
                start: '2024-12-14T10:00:00',
                description: 'Consulta com o Dr. João Silva'
            },
            {
                title: 'Vacinação',
                start: '2024-12-15T14:00:00',
                description: 'Vacinação contra gripe'
            },
        ],
        eventClick: function (event) {
            if (event.description) {
                $('#eventDetailsModalLabel').text(event.title);
                $('#modalClientName').text('João Silva'); // Exemplo
                $('#modalEventDate').text(event.start.format('DD/MM/YYYY'));
                $('#modalEventTime').text(event.start.format('HH:mm'));
                $('#eventDetailsModal').modal('show');
            }
        }
    });
});
