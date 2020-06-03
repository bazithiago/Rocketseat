let inputElement = document.querySelector('input[id=nome]')
let btnElement = document.querySelector('button.botao')
let boxElement = document.querySelector('#app')

btnElement.onclick = function() {
    let text = inputElement.value;

    alert(text)
}

boxElement.style.width = 100;
boxElement.style.height = '100px';
boxElement.style.backgroundColor = '#f00';

