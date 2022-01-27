class Data {
  public dia: number;
  mes: number;
  ano: number;

  constructor(d: number = 1, m: number = 1, a: number = 1970) {
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
  constructor(public dia: number, public mes: number, public ano: number) {}
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
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    return `${this.nome} de R$${this.preco} por R$${this.precoComDesconto()} (${
      this.desconto * 100
    }% off)`;
  }

  public precoComDesconto(): number {
    return this.preco - this.preco * this.desconto;
  }
}

const ssd = new Produto('SSD Daora', 400, 0.5);
const hd = new Produto('HD Daora', 200);

console.log(ssd, hd);
console.log(ssd.resumo());

// Modificadores de acesso

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual =
        delta > 0 ? (this.velocidadeAtual = this.velocidadeMaxima) : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Ford', 'Ka', 180);
console.log(carro.acelerar());
console.log(carro.frear());

// carro.velocidadeMaxima = 300 ERRO

// Herança

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }
  public acelerar(): number {
    return this.alterarVelocidade(15);
  }
  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('F40', 324);
console.log(f40);
console.log(f40.acelerar());
console.log(f40.frear());

// Getters & Setters

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
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
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio;
  }
}

console.log(Matematica.areaCirc(2)); // Não precisa instanciar

// Classe abstrata
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((prev, curr) => prev + curr);
  }
}

const soma = new Soma();

soma.executar(1, 2, 3, 4);
console.log(soma.getResultado());

class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance() {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

console.log(Unico.getInstance().agora());

// Somente leitura

class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');

// turboHelice.modelo = 'AVIAO' ERRO
