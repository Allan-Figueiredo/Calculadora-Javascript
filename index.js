
function outcome(){


    let num1 = Number(document.getElementById('num-um').value)
    let num2 = Number(document.getElementById('num-dois').value)
    let total = 0
    
    if(document.getElementById('caixa1').checked)
    total = num1 + num2
    else if ((document.getElementById('caixa2').checked))
    total = num1 - num2
    else if ((document.getElementById('caixa3').checked))
    total = num1 * num2
    else
    total = num1 / num2
    document.getElementById('resultArea').innerHTML = 'Resultado: '+ String(total)


}
