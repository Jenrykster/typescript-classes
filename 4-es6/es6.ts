'use strict';

//let & const
let seraQuePode = '?';
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  var acao = 'Colocar o casaco!';
}

//console.log(acao);

const cpf: string = '123.456.000-99';
//cpf = 'xyz';

console.log(cpf);

var segredo = 'externo';
function revelar() {
  var segredo = 'interno';
  console.log(segredo);
}
revelar();
console.log(segredo);

// Arrow Function
function somar(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(1, 3));

const subtrair = (n1: number, n2: number): number => n1 - n2;

console.log(subtrair(2, 3));

const saudacao = () => console.log('Olá!');
saudacao();

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa);
falarCom('João');

// this

// function normalComThis() {
//   console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind({ nome: 'João' });

// normalComThisEspecial();

// const arrowComThis = () => console.log(this);

// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind('Opa');

// arrowComThisEspecial();

function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 2
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log('FIM!');
}

contagemRegressiva();
contagemRegressiva(5);

// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Pedro', 'Carlos'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);

function retornaArray(...args: number[]): number[] {
  return args;
}

const numeros = retornaArray(1, 2, 5, 10, 56);
console.log(numeros);
console.log(retornaArray(...numbers));

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  // console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (array)

const cores = ['vermelho', 'verde', 'azul'];
const [cor1, cor2] = cores;

console.log(cor1, cor2);

// Destructuring (objeto)

const item = {
  nome: 'SSD',
  preco: 200,
  caracteristicas: {
    w: 'importado',
  },
};

const {
  nome: produto,
  preco,
  caracteristicas: { w },
} = item;

console.log(produto, preco, w);

// Template string

console.log(`${produto} custa ${preco} e é ${w}`);

// Desafios
// Exercicio 1
const dobro = (valor: number) => valor * 2;
console.log(dobro(10));

// Exercicio 2
const dizerOla = function (nome: string = 'Pessoa') {
  console.log('Olá, ' + nome);
};

dizerOla();
dizerOla('Anna');

// Exercicio 3
let nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));

// Exercicio 4
let array = [55, 20, ...nums];
// Adicionar todos os elementos de "nums" em array
console.log(array);

// Exercicio 5
var notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// Exercicio 6
var cientista = { primeiroNome: 'Will', expeciencia: 12 };
const { primeiroNome, expeciencia } = cientista;
console.log(primeiroNome, expeciencia);

// Callback

function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois...');
  }, 3000);
}

esperar3s((resultado: string) => console.log(resultado));

function esperar3sPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3s depois promise');
    }, 3000);
  });
}

esperar3sPromise().then((dado) => console.log(dado));

fetch('https://swapi.dev/api/people/1').then((response) => {
  response
    .json()
    .then((data) => data)
    .then((personagem) => console.log(personagem.films))
    .catch((error) => console.log(error));
});
