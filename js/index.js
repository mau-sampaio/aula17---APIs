// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
function atualizarDadosUsuario() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            renderizarDadosUsuario(data);
        });
}

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    const coletarDados = dados.results[0].name;
    const nomeCompleto = `${coletarDados.title} ${coletarDados.first} ${coletarDados.last} `
    document.querySelector(".card").innerHTML = `<img src="${dados.results[0].picture.large}" alt="">
        <h2>${nomeCompleto}</h2>
            <h3>${dados.results[0].email}</h3>`;
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("random");

    button.addEventListener("click", () => {
        atualizarDadosUsuario();
    })
    atualizarDadosUsuario();
})
