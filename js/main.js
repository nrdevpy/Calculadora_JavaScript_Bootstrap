
document.getElementById('button').addEventListener('click', () => {
    let opA = (document.getElementById('operandoA').value);
    let opB = (document.getElementById('operandoB').value);
    
    let result = parseInt(opA) + parseInt(opB);

    document.getElementById('showResult').innerHTML = `Resultado: ${result}`;
});