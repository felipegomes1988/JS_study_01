/* 
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/



let numberOne = prompt ("Digite o primeiro número");
let numberTwo = prompt ("Digite o segundo número");

alert(`A soma dos dois números é: ${Number(numberOne)+Number(numberTwo)}`);
alert(`A subtração dos dois números é: ${Number(numberOne)-Number(numberTwo)}`);
alert(`A multiplicação dos dois números é: ${Number(numberOne)*Number(numberTwo)}`);
alert(`A divisão dos dois números é: ${Number(numberOne)/Number(numberTwo)}`);
alert(`O resto da divisão dos dois números é: ${Number(numberOne)%Number(numberTwo)}`);

if((Number(numberOne)+Number(numberTwo))%2==0){
  alert("A soma dos dois números é: PAR");
}
else{
  alert("A soma dos dois número é: IMPAR");
}


if(numberOne==numberTwo){
  alert("Os dois números são iguais");
}
else{
  alert("Os dois números são diferentes")
};