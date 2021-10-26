const num = document.querySelector('#inputNumber');
const list = document.querySelector('#numbersLista')
const resultado = document.querySelector('#resultado');
const valores = [];

// Se o número for encontrado na lista retorna true senão retorna false
numerosLista = (number,lista) => {
    if (lista.indexOf(Number(number)) != -1) {
        return true
    } else {
        return false
    }
}

// Verifica se o número é valido para a lista
numeroValido = (number) => {
    if (Number(number) >= 1 && Number(number) <= 100) {
        return true
    } else {
        return false
    }
}

// Adiciona os números na lista
adicionaNumero = () => {
    if (numeroValido(num.value) && !numerosLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('p');
        list.innerHTML += (`Valor ${num.value} adicionado<br>`);
        resultado.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
        num.value = '';
        num.focus();
}

// Exibe a análise na tela
finalizaAnalise = () => {
    if (valores.length == 0) {
        window.alert('Insira os valores e tente novamente.');
    } else {
        let total = valores.length;
        let primeiroNum = valores[0];
        let ultimoNum = valores[valores.length - 1];
        let menorNum = Math.min(...valores);
        let maiorNum = Math.max(...valores);
        let soma = 0;
            for (let posicion in valores) {
                soma += valores[posicion]
            }
        let media = (soma / total);
 
        resultado.innerHTML = '';
        resultado.innerHTML += (`<p>Ao todo temos ${total} numeros</p>`);
        resultado.innerHTML += (`<p>O menor valor é ${menorNum}</p>`);
        resultado.innerHTML += (`<p>O maior valor é ${maiorNum}</p>`);
        resultado.innerHTML += (`<p>A soma dos valores é ${soma}</p>`);
        resultado.innerHTML += (`<p>A média dos valores é ${media}</p>`);
        resultado.innerHTML += (`<p>O primeiro valor adicionado foi ${primeiroNum}</p>`);
        resultado.innerHTML += (`<p>O último valor adicionado foi ${ultimoNum}</p>`);
    }
}