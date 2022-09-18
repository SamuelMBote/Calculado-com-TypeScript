export default class Tela {
  constructor(
    private elemento: HTMLDivElement | null = document.querySelector('#values'),
  ) {
    this.conteudo = '0';
  }
  set conteudo(valor: string) {
    if (valor.toString().length > 12) {
      valor = 'ERROR';
    }
    if (this.elemento) {
      this.elemento.innerHTML = valor.toString().replace('.', ',');
    }
  }
  get conteudo(): string {
    if (this.elemento) {
      return this.elemento.innerHTML;
    } else {
      return '0';
    }
  }
}
