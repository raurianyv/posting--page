// Seletores
const formulario = document.querySelector("#form-post");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");

const tituloRenderizar = document.querySelector("#renderizador-titulo");
const conteudoRenderizar = document.querySelector("#renderizador-conteudo");

// Evento de envio do formulário
formulario.addEventListener("submit", function (e) {

    // Impede o recarregamento da página
    e.preventDefault();

    // Verifica se os campos foram preenchidos
    if (titulo.value.trim() === "" || conteudo.value.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Objeto obrigatório da atividade
    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    // Envio para a API
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {

        // Renderiza o retorno na página
        tituloRenderizar.textContent = data.title;
        conteudoRenderizar.textContent = data.body;

        // Limpa os campos do formulário
        formulario.reset();

        // Mensagem de sucesso
        alert("Post publicado com sucesso!");

    })
    .catch(error => {

        console.error("Erro:", error);

        alert("Ocorreu um erro ao publicar o post.");

    });

});
