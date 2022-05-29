function comerPizza(){
    var fatiasRes = 8, fatiasComidas = 0
    while (fatiasRes != 0){
        fatiasRes--
        fatiasComidas++
        if (fatiasRes > 0) {
            console.log(`Voce comeu ${fatiasComidas} fatias`)
            console.log(`Restam ${fatiasRes} fatias`)
            console.log(``)
        } else if (fatiasRes == 0) {
            console.log(`Vc comeu todas as fatias da pizza`)
            console.log(``)
        }
    }
}
console.log(comerPizza())