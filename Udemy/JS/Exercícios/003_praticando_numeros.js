// Criando um exercício utilizando médias escolares para praticar funções e números

    const peso1 = 1.0
    const peso2 = 1.0
    const peso3 = 2.0
    const peso4 = 2.0
    const trabalho1 = 4
    const prova1 = 7
    const trabalho2 = 5
    const prova2 = 8
    const trabalho3 = 5
    const semanacultural = 9
    const prova4 = 6
    const trabalho4 = 5

    const media1 = ((trabalho1 + (prova1 * peso1)) / 2)
    const media2 = ((trabalho2 + (prova2 * peso2)) / 2)
    const media3 = ((semanacultural + (trabalho3 * peso3)) / 3)
    const media4 = ((trabalho4 + (prova4 * peso4)) / 3)
    const mediaFinal = ((media1 + media2 + media3 + media4) / (peso1 + peso2 + peso3 + peso4))

    console.log('Média Primeiro Bimestre: ' + media1)
    console.log('Média Segundo Bimestre: ' + media2)
    console.log('Média Terceiro Bimestre: ' + media3)
    console.log('Média Quarto Bimestre: ' + media4)
    console.log('Média Final: ' + mediaFinal)
