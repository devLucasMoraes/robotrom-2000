function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador')
    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    }
    if(operacao === '+') {
        peca.value = parseInt(peca.value) + 1;
    }
}

const controle = document.querySelectorAll(".controle-ajuste");
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)

    })
})



