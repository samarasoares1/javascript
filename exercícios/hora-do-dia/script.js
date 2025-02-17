function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
  //  var hora = data.getHours()
    var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12){
    img.src = 'imagens/dia.jpg'
    document.body.style.background = '#BFCACD'
    document.body.style.transitionDuration = "3s"
  } else if (hora >= 12 && hora < 18){
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#F8795D'
    document.body.style.transitionDuration = "3s"
  } else{
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#0E1A31'
    document.body.style.transitionDuration = "3s"
  }
}

