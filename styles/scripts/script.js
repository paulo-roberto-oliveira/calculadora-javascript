function calcular( n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

switch(selector){
    case"+":
    calculo = (n1 + n2)
    document.getElementById("resultado").innerHTML=`o resultado da soma de ${n1 }+ ${n2} é ${calculo}`
    break
    case"-":
    calculo = (n1 - n2)
    document.getElementById("resultado").innerHTML=`o resultado da subtraçao de ${n1 }+ ${n2} é ${calculo}`
    break
    calculo = (n1 / n2)
    document.getElementById("resultado").innerHTML=`o resultado da divisao de ${n1 }+ ${n2} é ${calculo}`
    break
    calculo = (n1 * n2)
    document.getElementById("resultado").innerHTML=`o resultado da multiplicacao de ${n1 }+ ${n2} é ${calculo}`
    break
}
}