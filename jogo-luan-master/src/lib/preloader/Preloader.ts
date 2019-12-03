/**
 * Classe responsável por controlar o carregamento de qualquer coisa
 * A classe pode receber um peso para cada tick do carregamento
 * e pode receber  uma função para ser executada em cada tick
 * 
 * O preloader também pode guardar a posição de falhas de carregamento.
 */

class Preloader {
  private _loader: number = 0; // porcentagem atual de carregamento
  private _failAt: number = 0; // em que porcentagem de carregamento falhou
  public readonly power!: number; // o peso de cada objeto no carregamento

  private _onIncrement!: (loader: number) => void;

  constructor(power: number = 1) {
    this.power = power;
    this.onIncrement = (loader: number) => { return }
  }

  /**
   * Retorna o valor de carregamento do preloader em porcentagem
   * Arredondado pra cima
   */
  get loader(): number {

    return Math.round(this._loader);
  }

  set loader(value: number) {
    if (value >= 0)
      this._loader = value;
  }

  /**
   * Retorna em que parte do carregamento ocorreu uma falha 
   */
  get failAt(): number {
    return this._failAt;
  }

  /**
   * Determina o momento atual de carregamento como falha
   */
  fail(): void {
    this._failAt = this._loader;
  }

  increment(n: number = 1): void {
    if (n > 0)
      this._loader += this.power * n;

    this._onIncrement(this.loader);
  }

  set onIncrement(callback: (param: number) => void) {
    this._onIncrement = callback;
  }
}