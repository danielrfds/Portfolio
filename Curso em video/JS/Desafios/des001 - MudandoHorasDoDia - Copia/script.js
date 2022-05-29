function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.innerHTML ='<img src="manha.png">'
        document.body.style.background = '#04a4ad'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.innerHTML ='<img src="tarde.png">'
        document.body.style.background = '#febe51'
    } else{
        //Boa noite!'
        img.innerHTML ='<img src="noite.png">'
        document.body.style.background = '#a485bf'
    }
} 

