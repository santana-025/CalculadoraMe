const tela = document.getElementById("tela");
function adicionar_na_tela(valor) {
    tela.innerHTML += `${valor}`;
}
function remover() {
    let texto = tela.innerText
    let sem_ultimo = texto.slice(0, -1);
    tela.innerHTML = `${sem_ultimo}`
}

function resultado() {
    let texto = tela.innerText
    console.log(Math.texto)
}