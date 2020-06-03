let nomes = ["Diego", "Gabriel", "Lucas"];
let element = document.body
let newUl = document.createElement('ul')
let inputValue = document.querySelector('input[name=nome')


function limpar() {
    if (inputValue.value !== '') {
        inputValue.value = ""
    }
}

function adicionar() {
    let newLi = document.createElement('li');
    let textLi = document.createTextNode(inputValue.value)

    newLi.appendChild(textLi);
    newUl.appendChild(newLi);
    element.appendChild(newUl);
    
    limpar();
}