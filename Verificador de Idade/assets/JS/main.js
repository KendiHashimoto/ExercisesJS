function verificar () {
    const data = new Date();
    const anoAtual = data.getFullYear();
    const anoNascimento = document.querySelector('#anoNascimento')
    const resultado = document.querySelector('#resultado')

    if (anoNascimento.value.length === 0 || anoNascimento.value > anoAtual) return window.alert('Verifique os dados e tente novamente!')
    else {
        let generoForm = document.getElementsByName('radsex')
        let idade = anoAtual - Number(anoNascimento.value)
        let sexo = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if (generoForm[0].checked) {
            sexo = 'homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src' , 'menino.jpg')
            } else if (idade < 17) {
                img.setAttribute('src' , 'garoto.jpg') 
            } else if (idade < 50) {
                img.setAttribute('src' , 'homem.jpg')
            }  else { 
                img.setAttribute('src' , 'idoso.jpg')
            }
        
        } else if (generoForm[1].checked) {
            sexo = 'mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src' , 'menina.jpg')
            } else if (idade < 17) {
                img.setAttribute('src' , 'garota.jpg') 
            } else if (idade < 50) {
                img.setAttribute('src' , 'mulher.jpg')
            }  else { 
                img.setAttribute('src' , 'idosa.jpg')
        }
    }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = (`Detectamos ${sexo} com ${idade} anos.`)
        resultado.appendChild(img)
    }   
}
