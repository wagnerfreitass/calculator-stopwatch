function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
function limpar() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function iniciar() {
    if (!iniciado) {
        iniciado = true;
        intervalo = setInterval(tempo, 1000)
    }
}
function pausar() {
    clearInterval(intervalo)
    iniciado = false;
}
function zerar() {
    sec = 0
    min = 0
    document.getElementById('tempo').innerText = '00:00:00'
}
function tempo() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hr++
        }
    }
    document.getElementById('tempo').innerText = digits(hr) + ':' + digits(min) + ':' + digits(sec)
}
function digits(numero) {
    if (numero < 10) {
        return ('0' + numero)
    }
    else {
        return (numero)
    }
}
var sec = 0
var min = 0
var hr = 0
var intervalo
var iniciado = false