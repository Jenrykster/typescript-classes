"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('joão'));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(23));
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(3.4);
// avaliacoes.push('3.4'); ERRO
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir(['1', '2', '3']);
imprimir([
    { nome: 'João', idade: 23 },
    { nome: 'Zé', idade: 28 },
]);
const chamarEcho = echoMelhorado;
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(1, 4).executar);
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(28, 1, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe Fila
// Atributo: fila(Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(fila) {
        this.fila = fila;
    }
    entrar(value) {
        this.fila.push(value);
    }
    proximo() {
        const primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const filaDePessoas = new Fila(['jão']);
const filaDeAlunos = new Fila([{ nome: 'jão', idade: 12 }]);
filaDeAlunos.entrar({ nome: 'Zé', idade: 10 });
filaDeAlunos.imprimir();
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({c,v})
// limpar(), imprimir()
// ...
class Mapa {
    constructor(arr) {
        this.arr = arr;
    }
    colocar(chave, valor) {
        this.arr.push({ chave, valor });
    }
    obter(chave) {
        return this.arr.find((el) => el.chave === chave);
    }
    limpar() {
        this.arr = [];
    }
    imprimir() {
        console.log(this.arr);
    }
}
const numsMap = new Mapa([]);
numsMap.colocar('dois', 2);
numsMap.imprimir();
