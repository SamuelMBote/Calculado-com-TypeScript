import DataHora from './DataHora';
import Operacao from './Operacao';
import Tela from './Tela';
export default class CalculadoraControle {
  constructor(private tela = new Tela(), private operacao = new Operacao()) {
    new DataHora();
    this.eventoBotoes();
  }
  eventoBotoes(): void {
    document.querySelectorAll('#teclado').forEach((elemento) => {
      elemento.addEventListener('click', (evento: Event) => {
        const target = evento.target as HTMLButtonElement;
        switch (target.id) {
          case 'um':
          case 'dois':
          case 'três':
          case 'quatro':
          case 'cinco':
          case 'seis':
          case 'sete':
          case 'oito':
          case 'nove':
            this.adicionarNumero(Number(target.dataset.valor));
            break;
          case 'adicao':
          case 'substracao':
          case 'divisao':
          case 'multiplicacao':
            this.adicionarOperador(String(target.dataset.valor));
            break;
          case 'ponto':
            break;
          case 'limpar':
            break;
          case 'desfazer':
            break;
          case 'porcentagem':
            break;
          case 'igual':
        }
      });
    });
  }
  adicionarOperacao(valor: string): void {
    this.operacao.adicionar(valor);
  }
  adicionarNumero(numero: number): void {
    this.tela.conteudo = numero.toString();
    this.adicionarOperacao(numero.toString());
  }
  adicionarOperador(operador: string): void {
    this.adicionarOperacao(operador);
  }
}
