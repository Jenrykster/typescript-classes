function logarClasse(construtor: Function) {
  console.log(construtor);
}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : () => {};
}

interface Eletrodomestico {
  imprimir?(): void;
}

@logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes');
      super(args);
      console.log('Depois');
    }
  };
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true,
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo critico foi alterado');
  }
}

new MudancaAdministrativa().critico();

function criarClasse(construtor: Function) {
  return construtor();
}
function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissão');
      }
    }
  };
}

class ContaCorrente {
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }
  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

cc.getSaldo = function () {
  return this['saldo'] + 7000;
};
console.log(cc.getSaldo());

function congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo['-' + nomePropriedade];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error('Saldo inválido');
      } else {
        alvo['-' + nomePropriedade] = valor;
      }
    },
  });
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(alvo);
  console.log(nomeMetodo);
  console.log(indiceParam);
}
