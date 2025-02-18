function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if( idade >=0 && idade < 10){
                img.src = 'bebe-m.jpg'
            }else if(idade < 21){
                img.src = 'adolescente-m.jpg'
            }else if(idade < 50){
                img.src = 'adulto-m.jpg'
            }else{
                img.src = 'idoso-m.jpg'
            }
            
        } else  if(fsex[1].checked){
            genero = 'Mulher'
            if( idade >=0 && idade < 10){
                img.src = 'bebe-f.jpg'
            }else if(idade < 21){
                img.src = 'adolescente-f.jpg'
            }else if(idade < 50){
                img.src = 'adulto-f.jpg'
            }else{
                img.src = 'idoso-f.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}