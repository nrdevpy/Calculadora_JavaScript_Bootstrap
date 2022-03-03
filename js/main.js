// Función para calcular.
document.getElementById('button').addEventListener('click', () => {
    // Variables
    let opA = (document.getElementById('operandoA').value); // Valor A.
    let opB = (document.getElementById('operandoB').value); // Valor B.
    let show = document.getElementById('showResult'); // Div de resultado.
    
    // Cálculo
    let result = parseInt(opA) + parseInt(opB);

    // Si no es un número.
    if (isNaN(result)){
        show.style.color = 'red';
        show.style.fontWeight = 'bold';
        result = '¡La operación no incluye números!'
    }

    // Si es un número.
    show.style.color = 'black';
    show.innerHTML = `Resultado: ${result}`;
});