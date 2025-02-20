let num = [5,7,3,2]


num[5] = 8
num.push(9)
num.length
num.sort()
console.log(`Nosso vetor é o ${num}`)



let pos = num.indexOf(7)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 7 está na posição ${pos}`)
}
