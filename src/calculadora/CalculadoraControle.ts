import DataHora from './DataHora';
import Tela from './Tela';
export default class CalculadoraControle {
  constructor(private tela = new Tela()) {
    new DataHora();
    this.tela.conteudo = '123.45689101';
    console.log(tela.conteudo);
  }
}
