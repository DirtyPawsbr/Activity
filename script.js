let numbers = document.getElementById('initialNumbers');
let result = document.getElementById('permutedNumbers');
let btn = document.getElementById('btnPermute');
let resultDiv = document.getElementById('resultDiv');
let numArray = [];


function randomPermuteMe(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

window.onload = function() {
    var value =prompt("How many numbers?:")
    document.getElementById("initialNumbers").innerHTML = value;

}
btn.onclick = function() {
    var numArray = [];
    for (var i = 0; i < 8; i++) {
      var numero = randomPermuteMe(1, 100);
      numerosSorteados.push(numero);
    }
    return numerosSorteados;
    document.getElementById("power").innerHTML = numerosSorteados;
  }
  document.getElementById("power").innerHTML = numerosSorteados;