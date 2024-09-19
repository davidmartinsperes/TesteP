
function contarA(string) {
    return string.toLowerCase().split('a').length - 1;
}


const texto = "David Martins Peres";


const quantidade = contarA(texto);


console.log(`A letra 'a' aparece ${quantidade} vezes .`);
