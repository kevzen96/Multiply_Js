let numberInput = document.getElementById('number-input');
let runButton = document.getElementById('run-btn');
let output = document.getElementById('number-output');

function Multiply() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    for(let i = 1 ; i<=12 ; i++){
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = '+ (number*i);
        outputHtml += '</p>';
    }
    output.innerHTML = outputHtml;
}

runButton.addEventListener('click', Multiply);