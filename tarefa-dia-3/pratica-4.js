function ehPrimo (numero) {
    let i = 2
    while (numero % i == 0) {
        return (`Sim, o número ${numero} é primo!`)
        i++
    }
        
    return (`Não, o número ${numero} não é primo!`)
}
    

console.log(ehPrimo(15))