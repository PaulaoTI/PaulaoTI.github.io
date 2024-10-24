function somar() {
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    var operacao = document.getElementById('opcao').value;
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado;

        if(operacao == '+'){
            resultado = num1 + num2;
            document.getElementById('resultado').innerText = +num1+ ' + ' +num2+ ' = ' + resultado;
        }
        else if (operacao == '-') {
            resultado = num1 - num2;
            document.getElementById('resultado').innerText = +num1+ ' - ' +num2+ ' = ' + resultado;
        }
        else if (operacao == '*') {
            resultado = num1 * num2;
            document.getElementById('resultado').innerText = +num1+ ' x ' +num2+ ' = ' + resultado;
        } 
        else if (operacao == '/') {
            resultado = num1 / num2;
            document.getElementById('resultado').innerText = +num1+ ' % ' +num2+ ' = ' + resultado;
        }
        else {
            resultado = 'Opção inválida';
        }
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }
}
