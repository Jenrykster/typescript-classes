// string
var nome = 'João';
console.log(nome);
// numbers
var idade = 27;
// idade = 'ana' -- ERRO;
console.log(idade);
idade = 27.5; // permitido
var possuiHobbies = false;
// possuiHobbies = 1 -- ERRO
console.log(possuiHobbies);
//tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
var hobbies = ['Jogar', 'Tocar violão'];
//hobbies = 100
var endereco = ['Av Principal', 99, 'XYZ'];
console.log(endereco);
endereco = ['Av secundária', 22, 'ABC'];
console.log(endereco);
// enums
var Cores;
(function (Cores) {
    Cores[Cores["Cinza"] = 0] = "Cinza";
    Cores[Cores["Verde"] = 100] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
    Cores[Cores["Laranja"] = 3] = "Laranja";
    Cores[Cores["Amarelo"] = 4] = "Amarelo";
    Cores[Cores["Vermelha"] = 100] = "Vermelha";
})(Cores || (Cores = {}));
var minhaCor = Cores.Verde;
console.log(minhaCor);
console.log(Cores.Azul);
console.log(Cores.Laranja, Cores.Amarelo);
// any
var carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
};
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(3, 2));
// tipo função
var calculo;
calculo = multiplicar;
console.log(calculo(3, 5));
// objetos
var usuario = {
    nome: 'João',
    idade: 18
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria'
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
var baterPonto = function (hora) {
    return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
};
var funcionario;
funcionario = {
    supervisores: ['Zézinho', 'João'],
    baterPonto: baterPonto
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
var funcionario2 = {
    supervisores: ['Ana', 'Sonia'],
    baterPonto: baterPonto
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 ".concat(nota, "!"));
nota = '5';
console.log("Minha nota \u00E9 ".concat(nota, "!"));
// Checando tipos
console.log(typeof nota);
// never
function falha(msg) {
    // Função não tem end-point
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa de nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// Null types
var altura = 12;
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '0909*(*(*989',
    tel2: null
};
var contato2 = {
    nome: 'Fulano',
    tel1: '0909*(*(*989',
    tel2: '090909009090'
};
var podeSerNulo = null; // Tipo [any]
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
