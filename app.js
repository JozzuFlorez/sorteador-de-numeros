function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if( de > ate ){ 
        alert(`o campo "DO NÚMERO" (onde você inseriu:${document.getElementById('de').value}) deve ser inferior ao campo "ATÉ O NÚMERO" (onde você inseriu:${document.getElementById('ate').value})`);
        return;
    } 

    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado. Verifique!');
    return;
  }


    for (let i = 0; i < quantidade; i++) {
        numero = obterNumero(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumero(de, ate);
        }

        sorteados.push(numero);
    }

    console.log(sorteados);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarBotao();
}

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: </label>`;
    alterarBotao();


function obterNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: </label>`;
    alterarBotao()


}