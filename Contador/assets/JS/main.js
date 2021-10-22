contador = () => {
    const i = document.querySelector('#inputInicio');
    const f = document.querySelector('#inputFim');
    const p = document.querySelector('#inputPasso');
    const resultado = document.querySelector('#resultado');

    contagem = () => {
        if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
            resultado.innerHTML = ('Preencha os campos acima.');
        } else {
            resultado.innerHTML = ('Contando..</br>');
            let inicio = Number(i.value);
            let fim = Number(f.value);
            let passo = Number(p.value);
        }

        if (passo = 0) {
            resultado.innerHTML = ('Passo inválido,considerando passo 1.')
            passo = 1
        }

        if (i < f) {
            let contador = 1
            while (i < f) {
                resultado.innerHTML += (`${c}`);
                contador++;
            }
            
        } else {
            while (i > f) {
                resultado.innerHTML += (`${c}`);
                contador++;
            }
        }
    }
    contagem();
}