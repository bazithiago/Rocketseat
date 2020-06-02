let lista = [];

function pares(n1, n2) {
    while (n1 <= n2) {
        if ((n1 % 2) == 0) {
            lista.push(n1);
        }
        n1++
    }
}

pares(32, 100)
console.log(lista)


let lista2 = []

function exibePares(n1, n2) {

    for (let i = n1; i <= n2; i++) {
        if (n1 % 2 == 0) {
            lista2.push(i)
        }
    } return lista2
}

exibePares(20,50)
console.log(lista2)