// string
let nome: string = 'João';
console.log(nome);

// numbers
let idade: number = 27;
// idade = 'ana' -- ERRO;
console.log(idade);

idade = 27.5; // permitido

let possuiHobbies: boolean = false;
// possuiHobbies = 1 -- ERRO

console.log(possuiHobbies);

//tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';

let hobbies: string[] = ['Jogar', 'Tocar violão'];

//hobbies = 100

let endereco: [string, number, string] = ['Av Principal', 99, 'XYZ'];
console.log(endereco);

endereco = ['Av secundária', 22, 'ABC'];
console.log(endereco);

// enums

enum Cores {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 2, // 2
  Laranja,
  Amarelo,
  Vermelha = 100,
}

let minhaCor: Cores = Cores.Verde;
console.log(minhaCor);

console.log(Cores.Azul);
console.log(Cores.Laranja, Cores.Amarelo);

// any

let carro: any = 'BMW';
console.log(carro);
carro = {
  marca: 'BMW',
  ano: 2019,
};

function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log('oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(3, 2));

// tipo função

let calculo: (numeroA: number, numeroB: number) => number;

calculo = multiplicar;

console.log(calculo(3, 5));

// objetos

let usuario: { nome: string; idade: number | string } = {
  nome: 'João',
  idade: 18,
};

console.log(usuario);

usuario = {
  idade: 31,
  nome: 'Maria',
};

console.log(usuario);

// exercício

/* 
  Criar um objeto funcionário com:
    - Array de strings com os nomes do supervisores
    - Função de bater ponto que recebe a hora e retorna uma string
      -> Ponto normal (<= 8)
      -> Fora do horário(> 8)
*/

const baterPonto = (hora: number) =>
  hora <= 8 ? 'Ponto normal' : 'Fora do horário';

type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};
let funcionario: Funcionario;

funcionario = {
  supervisores: ['Zézinho', 'João'],
  baterPonto: baterPonto,
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));

let funcionario2: Funcionario = {
  supervisores: ['Ana', 'Sonia'],
  baterPonto: baterPonto,
};

// Union Types

let nota: number | string = 10;

console.log(`Minha nota é ${nota}!`);

nota = '5';
console.log(`Minha nota é ${nota}!`);

// Checando tipos

console.log(typeof nota);

// never

function falha(msg: string): never {
  // Função não tem end-point
  throw new Error(msg);
}

const produto = {
  nome: 'Sabão',
  preco: 10,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa de nome');
    }
    if (this.preco <= 0) {
      falha('Preço inválido');
    }
  },
};

produto.validarProduto();

// Null types

let altura = 12;

let alturaOpcional: null | number = 12;

alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '0909*(*(*989',
  tel2: null,
};

const contato2: Contato = {
  nome: 'Fulano',
  tel1: '0909*(*(*989',
  tel2: '090909009090',
};

let podeSerNulo = null; // Tipo [any]

// Desafio

type Conta = {
  saldo: number;
  depositar: (valor: number) => void;
};
type Correntista = {
  nome: string;
  contaBancaria: Conta;
  contatos: string[];
};
let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
