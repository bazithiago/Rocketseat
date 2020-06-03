let inputElement = document.querySelector('input[id=nome]')
let btnElement = document.querySelector('button.botao')

btnElement.onclick = function() {
    let text = inputElement.value;

    alert(text)
}