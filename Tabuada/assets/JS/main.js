function tabuada() {
    const num = document.querySelector('#inputTabuada');
    const tab = document.querySelector('#lugarTabuada');
    if (num.value.length == 0) {
        window.alert('Digite um número e tente novamente.'); 
    } else {
        const numero = Number(num.value);
        let contador = 1;
        tab.innerHTML = '';
        while (contador < 11) {
            let item = document.createElement('option');
            item.text = (`${numero} x ${contador} = ${numero * contador}`);
            item.value = `tab${contador}`;
            tab.appendChild(item);
            contador++;
        }         
    }   
}