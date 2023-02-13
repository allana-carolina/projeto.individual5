const prompt = require('prompt-sync')
const comando = prompt()

const propriedadecss = (input) => {
    let output = []
    while (input != "Sair") {
        output.push(input);
        input = comando("Insira uma propriedade CSS:")
    }
    let resultado = output.sort().join("\n")
    console.log(resultado)
}
propriedadecss()
