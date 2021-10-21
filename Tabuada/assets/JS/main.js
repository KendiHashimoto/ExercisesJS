function tabuada() {

    const num = document.querySelector('#inputTabuada');
    const tab = document.querySelector('.tabuada');

    if (num.value.length == 0) {
        window.alert('Digite um número e tente novamente.'); 
    } else {
        const numero = Number(num.value);
        let contador = 1;
        tab.innerHTML = '';

    repetirTabuada = () => {
        while (c < 11) {
            let item = document.createElement('option');
            item.text = `${numero} x ${contador} = ${numero * contador}`;
            item.value = `tab${contador}`;
            tab.appendChild(item);
            contador++;
            }         
        }
    }   
}