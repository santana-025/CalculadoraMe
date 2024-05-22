const tela_div = document.getElementById("telinha");
const previa_div = document.getElementById("previa")
function adicionando(valor) {
    tela_div.innerHTML += `${valor}`
}
function remover() {
    let remove_ultimo = tela_div.textContent.slice(0, -1);
    tela_div.innerHTML = `${remove_ultimo}`
}
function resetar() {
    tela_div.innerHTML = " "
    previa_div.innerHTML = " "
}




let calculando = 0
function sinais(valor) {
    let valor_tela = tela_div.textContent
    let valor_previa = previa_div.textContent
    let splitString = valor_previa.split("");
    let reverseArray = splitString.reverse();

    if (valor === reverseArray[0]) {
        reverseArray[0] = `${valor}`
    }
    console.log(reverseArray[0])
    previa_div.innerHTML += `${valor_tela}${valor}`
    tela_div.innerHTML = " "
}

