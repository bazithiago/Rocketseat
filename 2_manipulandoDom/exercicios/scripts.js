let botaoAdicionar = document.querySelector('button.add')
let divApp = document.querySelector('#app')

let textoBotao = document.createTextNode('Clique para adicionar')

// let addQuadrado = 

botaoAdicionar.appendChild(textoBotao);
botaoAdicionar.onclick = function () {
    let quadrado = document.createElement('div');
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = '#F00';
    divApp.appendChild(quadrado)
};

