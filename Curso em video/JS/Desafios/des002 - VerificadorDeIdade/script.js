function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked){
           gênero = 'Homem'
           if(idade >= 0 && idade <= 15){
            // Criança
            img.setAttribute('src', 'images/CriancaMenino.png')
           } else if (idade < 30){
            // Jovem
            img.setAttribute('src', 'images/JovemHomem.png')
           } else if (idade < 70){ 
            // Adulto
            img.setAttribute('src', 'images/Homem.png')
           } else{
            // Idoso
            img.setAttribute('src', 'images/Idoso.png')
           }
           

       } else if (fsex[1].checked){
           gênero = 'Mulher'
           if(idade >= 0 && idade <= 15){
            // Criança
            img.setAttribute('src', 'images/CriancaMenina.png')
           } else if (idade < 30){
            // Jovem
            img.setAttribute('src', 'images/JovemMulher.png')
           } else if (idade < 70){ 
            // Adulta
            img.setAttribute('src', 'images/Mulher.png')
           } else{
            // Idosa
            img.setAttribute('src', 'images/Idosa.png')
           }
       }

       res.innerHTML = `Detectamos um(a) ${gênero} de ${idade} anos.`
       res.appendChild(img)
       img.style.display = 'block'
       img.style.margin = 'auto'
    }
}