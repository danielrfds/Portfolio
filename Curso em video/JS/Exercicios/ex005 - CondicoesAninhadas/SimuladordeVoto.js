var idade = 18
console.log(`Sua idade é ${idade}`)

if(idade >= 18 && idade < 72 ){ // "&&" lê-se "e"
    console.log('Voto obrigatório')
} else if(idade >= 16 || idade >= 72){ // "||" lê-se "ou"
    console.log('Voto opcional')
} else{
    console.log('Voto proibído')
}
    