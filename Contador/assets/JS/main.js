function contador () {
    let inicio = document.querySelector('#inputInicio');
    let fim = document.querySelector('#inputFim');
    let passo = document.querySelector('#inputPasso');
    const resultado = document.querySelector('#resultado');

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('Preencha os campos.');

        } else {
            resultado.innerHTML = ('Contando: </br>');
            let i = Number(inicio.value);
            let f = Number(fim.value);
            let p = Number(passo.value);
            if (passo = 0) {
                window.alert('Passo inválido,considerando PASSO 1.')
                passo = 1
            }
            if (i < f) {
                for (let c = i; c <= f ; c += p) {
                    resultado.innerHTML += (`${c} , `)
            } 

            } else {
                for ( let c = i ; c >= f ; c -= p) {
                    resultado.innerHTML += (`${c} , `)
            }
        }
    }
}