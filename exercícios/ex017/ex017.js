/*
function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('res');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
  }
*/


function tabuada(){
  var num = document.getElementById('num')
  var tab = document.getElementById('tab')

  if(num.value.length == 0){
    alert('Por favor, digite um número!')
  } else{
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ''
    while(c <= 10){
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value =`tab${c}`
      tab.appendChild(item)
      c++
    }
  }



}
