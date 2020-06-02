let cadastro = {
    nome: "Thiago",
    rua: "Brigadeiro Luis Antonio",
    numero: 1186,
    bairro: "Bela Vista",
    cidade: "São Paulo",
    uf: "SP"
}

function enderecoUsuario(usuario) {
    let resultado = (cadastro.nome == usuario) ? "O usuário mora em " + cadastro.cidade + " / " + cadastro.uf + ", no bairro " + cadastro.bairro + ", no endereço: " + cadastro.rua + ", nº " + cadastro.numero + "." : "Usuário não cadastrado";

    return resultado
}

console.log(enderecoUsuario("Thiago"))
