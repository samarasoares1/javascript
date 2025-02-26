var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')

var valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else {
        return false
    }
}
function isLista(n, l){
    if (l.indexof(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        alert('OK')
    } else{
        alert('Valor inválido ou já encontrado na lista.')
    }
}