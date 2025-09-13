function calcular(){
    const temp1 = document.getElementById(temp).value;
    const resultado = (parseInt(temp1)-32)*(5/9);
    document.getElementById('resultado').innerHTML = resultado;

}