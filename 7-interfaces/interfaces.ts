interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'KKKKK';
}

const pessoa = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    'Olá, meu nome é ' + this.nome + ' ' + sobrenome;
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);

// Usando Classes...

class Cliente implements Humano {
  nome: string = '';
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Array(exp - 1)
    .fill(0)
    .reduce((prev, curr) => prev * base, base);
};

console.log(potencia(3, 2));

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

// Extendendo o Object

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

let x = 1;
x.log();
