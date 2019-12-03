/**
 * Responsável por preparar todos os objetos do jogo e responder a falhas
 * ou mudanças durante o carregamento.
 */

class GameLoader {
  private preloader: Preloader;
  private _objects: Queue<GameObject> = new Queue<GameObject>();

  constructor(...objects: GameObject[]) {
    objects.forEach((item) => {
      this._objects.push(item);
    });

    this.preloader = new Preloader(100 / objects.length);
  }

  /**
   * Prepara todos os objetos e passa como parâmetro da promise a porcentagem
   * de objetos prontos
   */
  public async setupObjects(): Promise<number> {
    if (this._objects.isEmpty()) { return this.preloader.loader; };

    return new Promise(async (resolve, reject) => {
      await this._objects.poll()!.setup().then(async () => {
        this.preloader.increment();

        await this.setupObjects();
      });

      resolve(this.preloader.loader)
      reject(this.preloader.fail())
    })
  }

  /**
   * Função que vai ter como gatilho cada atualização do preloader.
   */
  public set onload(callback: (param: number) => void) {
    this.preloader.onIncrement = callback;
  }
}