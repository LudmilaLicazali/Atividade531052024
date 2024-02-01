
//// ATIVIDADE 5 ////

// 1 - CALCULE A PORCENTAGEM ENTRE DOIS NUMEROS

let prompt = require('prompt-sync')();

x = parseInt(prompt("Digite o valor de x: "));
y = parseInt(prompt("Digite o valor de y: "));

// let x = 40;
// let y = 10;

function calcPct(x, y){
    return (y/x) * 100;
}

let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


// 2 - Calcule o preço do imóvel.

let m2 = 3000
let metragem = 123;
let quartos = 1;

    function calcularImovel (metragem, quartos){
        
        if (quartos == 3) {
            return metragem * (m2 * 1.5) 

        } else if (quartos == 2){
            return metragem * (m2 * 1.2)

        } else{
            return metragem * (m2 * 1)
        }

    }

let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);


// 3. Desenvolva uma função que calcule o quadrado de um dado número.

let leia = require('prompt-sync')();

numero = parseInt(leia("Digite o numero: "));

function quadrado (numero) {
     quadrado = numero * numero;

}

quadrado(numero)

console.log("O quadrado do valor digitado é: " + quadrado)