// Mostra ou esconde os detalhes do projeto
function verDetalhes(id, botao) {
    let detalhes = document.getElementById(id);

    if (detalhes.style.display == "block") {
        detalhes.style.display = "none";
        botao.textContent = "Detalhes";
    } else {
        detalhes.style.display = "block";
        botao.textContent = "Fechar";
    }
}
