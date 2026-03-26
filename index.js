let n1 = 56;
let n2 = 98;
const soma = n1 + n2;
const sub = n1 - n2;
const divisão = n1/n2;
const multiplicação = n1 * n2;
let mensagem = 'O resultado da mutiplicação é {multiplicação},O resultado da soma é {soma}, e o resultado da subtração é {sub}'.replace('{soma}', multiplicação , soma) .replace('{sub}', multiplicação, sub);
let msg2 = soma >=100? 'Sua soma é maior que 100': 'Sua soma é menor que 100';
let msg = sub >=100? 'Sua subtração é maior que 100': 'Sua subtração é menor que 100';
let msg3 = multiplicação >=100? 'sua multiplicação é maior que 100': 'Sua multiplicação é menor que 100';

console.log (mensagem);
console.log (msg2);
console.log (msg);
console.log (msg3);