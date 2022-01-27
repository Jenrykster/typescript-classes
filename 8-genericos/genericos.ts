function echo(objeto: any) {
  return objeto;
}

console.log(echo('joão'));

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado<number>(23));

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(3.4);
// avaliacoes.push('3.4'); ERRO

// Array
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<string>(['1', '2', '3']);

type Aluno = { nome: string; idade: number };

imprimir<Aluno>([
  { nome: 'João', idade: 23 },
  { nome: 'Zé', idade: 28 },
]);

// Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;

// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}
  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(1, 4).executar);

class Data {
  constructor(public dia = 1, public mes = 1, public ano = 1970) {}
}

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }
  executar(): string {
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

class Fila<T extends Aluno | string | number> {
  constructor(public fila: T[]) {}
  entrar(value: T) {
    this.fila.push(value);
  }
  proximo(): T {
    const primeiro = this.fila[0];
    this.fila.splice(0, 1);
    return primeiro;
  }

  imprimir() {
    console.log(this.fila);
  }
}

const filaDePessoas = new Fila<string>(['jão']);
const filaDeAlunos = new Fila<Aluno>([{ nome: 'jão', idade: 12 }]);
filaDeAlunos.entrar({ nome: 'Zé', idade: 10 });
filaDeAlunos.imprimir();

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({c,v})
// limpar(), imprimir()

// ...

class Mapa<C, V> {
  constructor(public arr: { chave: C; valor: V }[]) {}
  colocar(chave: C, valor: V) {
    this.arr.push({ chave, valor });
  }
  obter(chave: C): { chave: C; valor: V } | undefined {
    return this.arr.find((el) => el.chave === chave);
  }
  limpar(): void {
    this.arr = [];
  }
  imprimir(): void {
    console.log(this.arr);
  }
}

const numsMap = new Mapa<string, number>([]);

numsMap.colocar('dois', 2);
numsMap.imprimir();
