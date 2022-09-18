export default class Operacao {
  constructor(private operacao: string[] = []) {}
  adicionar(valor: string): number {
    this.operacao.push(valor);
    console.log(this.operacao);
    return this.length;
  }
  get length(): number {
    return this.operacao.length;
  }
}
