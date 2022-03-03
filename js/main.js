
document.getElementById('button').addEventListener('click', () => {
    let opA = parseInt(document.getElementById('operandoA').value);
    let opB = parseInt(document.getElementById('operandoB').value);
    
    let result = `Resultado: ${opA + opB}`;

    document.getElementById('showResult').innerHTML = result;
});