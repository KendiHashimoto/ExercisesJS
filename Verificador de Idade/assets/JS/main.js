function verificar () {
    const data = new Date();
    const anoAtual = data.getFullYear();
    const anoNascimento = document.querySelector('#anoNascimento')
    const resultado = document.querySelector('#resultado')

    if (anoNascimento.value.length === 0 || anoNascimento > anoAtual) return window.alert('Verifique os dados e tente novamente!')
    else {
        const gêneroForm = document.querySelector('radsex')
        const idade = anoAtual - anoNascimento
        const sexo = ''
        const img = document.createElement('img')
        if (gêneroForm[0].checked) {
            sexo = 'homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src' , menino.jpg)
            } else if (idade >= 13 && idade <= 17)
                img.setAttribute('src' , garoto.jpg) 
            } else if (idade >= 18 && idade <= 59) {
                img.setAttribute('src' , homem.jpg)
            }  else { 
                img.setAttribute('src' , idoso.jpg)
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = (`Detectamos um ${sexo} com ${idade} anos.`)
    resultado.appendChild(img)
};