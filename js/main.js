const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll('[data-estatistica]');

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        //console.log(evento);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode,  evento.target.dataset.peca);
    

    })
})

function manipulaDados(operacao, controle, peca) {
    const pecaControle = controle.querySelector('[data-contador]');
    //console.log(equipamentoControle);
    if(operacao === '-') {
        if(parseInt(pecaControle.value) === 0){
            pecaControle.value = parseInt(pecaControle.value);
        } else {
            pecaControle.value = parseInt(pecaControle.value) - 1;
            estatisticas.forEach( (elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
            })
        }
    }
    if(operacao === '+') {
        pecaControle.value = parseInt(pecaControle.value) + 1;
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
    }
}




