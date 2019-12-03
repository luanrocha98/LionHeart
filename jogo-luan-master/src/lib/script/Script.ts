/**
 * Um roteiro é a abstração da sequencia de acontecimentos num episódio
 * 
 * Ele contém as falas e o número do episódio que deve ser exibido
 */
abstract class Script {
  public readonly episode: number;

  private readonly _header: HeaderDialog;

  public static allActors: Actor[] = [];

  constructor(episode: number, header: HeaderDialog) {
    this.episode = episode;
    this._header = header;
    Script.allActors.push(...header.speakers)
  }

  get header(): HeaderDialog {
    return this._header;
  }

  abstract buildScene(): SceneBuilder;
}
