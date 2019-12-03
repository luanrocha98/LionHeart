/**
 * Uma cena controla a exibição através de um roteiro.
 *
 * Ela indica quem está aparecendo, quem ouve e quem fala.
 */

class Scene {
  private _actors: Set<Actor> = new Set();
  private _background: HTMLImageElement;
  private _listenning: Set<Actor> = new Set();

  constructor(actors: Actor[], background: HTMLImageElement, listenning: Actor[] = []) {
    actors.forEach((actor) => {
      this._actors.add(actor);
    })

    listenning.forEach((actor) => {
      this._listenning.add(actor);
    })

    this._background = background;
  }

  public controller(callback: (actors: Actor[], backgroud: HTMLImageElement, listenners: Actor[]) => void): void {
    callback(this.actors, this.background, this.listenners);
  }

  public get actors(): Actor[] {
    return Array.from(this._actors.values());
  }

  public get listenners(): Actor[] {
    return Array.from(this._listenning.values());
  }

  public get background(): HTMLImageElement {
    return this._background;
  }
}
