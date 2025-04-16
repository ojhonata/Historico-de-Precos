function exibirFormulario(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.querySelector("#login-form form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = loginForm.querySelector('input[name="email"]');
            const senhaInput = loginForm.querySelector('input[name="password"]');

            const email = emailInput.value.trim();
            const senha = senhaInput.value.trim();

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!emailValido) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            if (senha.length < 6) {
                alert("A senha deve ter pelo menos 6 caracteres.");
                return;
            }

            window.location.href = "../pagina.html";
        });
    } else {
        console.error("Formulário de login não encontrado.");
    }

    const campoPesquisa = document.getElementById("pesquisar");

    if (campoPesquisa) {
        campoPesquisa.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();

                const textoDigitado = campoPesquisa.value.trim();

                if (textoDigitado === "") {
                    alert("Por favor, digite algo para pesquisar.");
                } else {
                    window.location.href = "../pagina2.html";
                }
            }
        });
    }

    const chartCanvas = document.getElementById('priceChart');

    if (chartCanvas) {
        const grafico = chartCanvas.getContext('2d');

        new Chart(grafico, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março'],
                datasets: [
                    {
                        label: 'Produto',
                        data: [10000, 11000, 10500],
                        backgroundColor: 'black'
                    },

                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return "R$ " + value.toLocaleString('pt-BR');
                            }
                        }
                    }
                }
            }
        });
    } else {
        console.warn("Elemento de gráfico não encontrado.");
    }
});
