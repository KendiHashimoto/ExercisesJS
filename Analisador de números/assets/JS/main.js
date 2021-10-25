const num = document.querySelector('#inputNumber');
const list = document.querySelector('#NumbersLista')
const resultado = document.querySelector('#resultado');
const valores = [];

numerosLista = (lista,number) => {
    lista.indexOf(Number(number)) != -1 ? true : false;
}

numeroValido = (number) => {
    Number(number) >= 1 && Number(number) <= 100 ? true : false;
}

adicionar = () => {
    if (numeroValido(num.value) && numerosLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('p');
    item.text = (`Valor ${num.value} adicionado.`);
    list.appendChild(item);
    resultado.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '';
    num.focus();
}

finalizar = () => {

}