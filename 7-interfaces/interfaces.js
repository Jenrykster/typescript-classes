"use strict";
function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'KKKKK';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        'Olá, meu nome é ' + this.nome + ' ' + sobrenome;
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
let potencia;
potencia = function (base, exp) {
    return Array(exp - 1)
        .fill(0)
        .reduce((prev, curr) => prev * base, base);
};
console.log(potencia(3, 2));
class RealA {
    a() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
