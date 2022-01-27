"use strict";
class Data {
    constructor(d = 1, m = 1, a = 1970) {
        this.dia = d;
        this.mes = m;
        this.ano = a;
    }
}
const aniversario = new Data(22, 4, 2003);
aniversario.dia = 22;
console.log(aniversario);
const casamento = new Data();
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(10, 10, 2010);
console.log(aniversarioEsperto);
// Desafio Produto
// Atributos: nome, preço e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs2.: Criar dois produtos passando dois e três parâmetros
// Criar método precoComDesconto
// Alterar método resumo para mostrar o preço com desconto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} de R$${this.preco} por R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        return this.preco - this.preco * this.desconto;
    }
}
const ssd = new Produto('SSD Daora', 400, 0.5);
const hd = new Produto('HD Daora', 200);
console.log(ssd, hd);
console.log(ssd.resumo());
// Modificadores de acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual =
                delta > 0 ? (this.velocidadeAtual = this.velocidadeMaxima) : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro = new Carro('Ford', 'Ka', 180);
console.log(carro.acelerar());
console.log(carro.frear());
// carro.velocidadeMaxima = 300 ERRO
// Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(15);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 20) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(2)); // Não precisa instanciar
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((prev, curr) => prev + curr);
    }
}
const soma = new Soma();
soma.executar(1, 2, 3, 4);
console.log(soma.getResultado());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log(Unico.getInstance().agora());
// Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'AVIAO' ERRO
//# sourceMappingURL=classes.js.map