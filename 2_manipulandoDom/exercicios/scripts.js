let botaoAdicionar = document.querySelector('button.add')
let divApp = document.querySelector('#app')

let textoBotao = document.createTextNode('Clique para adicionar')

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


botaoAdicionar.appendChild(textoBotao);
botaoAdicionar.onclick = function () {
    let quadrado = document.createElement('div');

    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = '#F00';

    quadrado.addEventListener("mouseover",() => {
        let newColor = getRandomColor();

        quadrado.style.background = newColor;

    });

    quadrado.classList.add('square')
    
    divApp.appendChild(quadrado)
};



