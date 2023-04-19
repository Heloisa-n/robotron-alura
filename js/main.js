//-----------------ADICIONAR ATIRUBUTOS AO ROBO----------------------//
const robotron = document.querySelector("#robotron");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {

    elemento.addEventListener("click", (evento) => {

        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.pecas);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

//-------FIM----------ADICIONAR ATIRUBUTOS AO ROBO--------FIM--------//

//-----------------CALCULO DOS ATRIBUTOS DO ROBO---------------------//

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
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function atualizaEstatisticas(peca) {

    estatisticas.forEach((elemento) => {
       
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}



/*Qual a diferença entre a função anônima e a função declarada? 

1-se ela tem um nome, posso chama-la várias vezes/situações;

2- Uma fonção anônima, não pode ser executada/chamada em outro momento; 

Arrow function = () => Sinal da função anônima () =>

*/