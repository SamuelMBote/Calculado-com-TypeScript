interface IOperacaoOpcoes {
  onCalculado: any;
}
export default class Operacao {
  private onCalculado: any;
  constructor(public opts: IOperacaoOpcoes, private operacao: string[] = []) {
    this.onCalculado = opts.onCalculado;
    console.log(this.operacao);
  }
  adicionar(valor: string): number {
    if (this.operacao.length === 3) {
      this.calcular();
    }
    this.operacao.push(valor);
    console.log(this.operacao);
    return this.length;
  }
  obterResultado(): string {
    let resultado: string = '0';
    try {
      resultado = eval(this.operacao.join('')).toString();
    } catch (error) {
      resultado = 'ERRO';
    }

    return resultado;
  }
  calcular(): void {
    let resultado = this.obterResultado();
    if (resultado.length > 12) {
      resultado = resultado.substring(0, 12);
    }
    this.operacao = [resultado];
    this.onCalculado(resultado);
  }
  get length(): number {
    return this.operacao.length;
  }
}
