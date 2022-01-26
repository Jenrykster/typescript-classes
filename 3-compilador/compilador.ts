let canal: string = 'Gaveta';
let inscritos: number = 610234;

canal = 'Fireship.io';
console.log(canal);

function soma(a: any, b: any) {
  return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean, parametroNaoUsado: any) {
  let saudacao: string = isManha ? 'Bom dia' : 'Olá, como vai ?'; // strictNullChecks

  return saudacao;
}
