var Cadastro = [{
    "nome": "Rommel Carneiro",
    "cidade": "Belo Horizonte",
    "idade": 25,
    "veiculos": [{
        "marca": "Fiat",
        "modelo": "Toro",
        "ano": 2020,
        "placa": "MSD-4841"
    }]
}, {
    "nome": "Maria Tereza",
    "cidade": "Rio de Janeiro",
    "idade": 28,
    "veiculos": []
}, {
    "nome": "Pedro Banana",
    "cidade": "São Paulo",
    "idade": 48,
    "veiculos": [{
        "marca": "Ford",
        "modelo": "Territory",
        "ano": 2021,
        "placa": "ASD-8565"
    }, {
        "marca": "Toyota",
        "modelo": "Ethios",
        "ano": 2019,
        "placa": "GSA-4864"
    }]
}];

function ExibirCadastro() {
    var textoHTML = '';
    for (let x=0; x < Cadastro.length; x++) {
        textoHTML += `Pessoa: ${Cadastro[x].nome} <br>`;

        if (Cadastro[x].veiculos.length > 0) {
            textoHTML += '<ul>';
        }

        for (let y = 0; x < Cadastro[x].veiculos.length; y++) {
            let marca = Cadastro[x].veiculos[y].marca;
            let modelo = Cadastro[x].veiculos[y].modelo;
            let ano = Cadastro[x].veiculos[y].ano;
            let placa = Cadastro[x].veiculos[y].placa;
            textoHTML += `<li>${marca} - ${modelo} - ${placa} - ${ano}</li>`;
        } 

        if (Cadastro[x].veiculos.length > 0) {
            textoHTML += '</ul>';
        }
    } 
        var tela = document.getElementById('tela');
        tela.innerHTML = textoHTML;
    }
