var c = 1
while (c <= 6){
console.log(`Passo ${c}`)
c++
}


function contar(){
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')

var res = document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossível contar'
    window.alert('[ERRO] Faltam dados!')
    
} else {
    res.innerHTML = 'Contando... <br>'

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p <= 0){
        alert('Passo inválido! Considerando passo 1')
        p = 1
    }

    if (i < f){ //contagem crescente
    for(var  c = 1; c <= f; c += p){
        res.innerHTML += ` ${c} 👉🏻`
    } }
    else {
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} 👉🏻`
        }
    }
    res.innerHTML += `\u{1F6A9}`
} 
}

