/**
 * Representa um objeto de jogo para um personagem
 * Possui um nome e um sprite.
 */
class Actor implements GameObject {
  public name: string;
  private _sprite: HTMLImageElement | null = null;
  private readonly _spriteSrc: string; // caminho para o sprite
  private _x: number | null = null;
  private _y: number | null = null;

  public scale: number;

  constructor(nome: string, x?: number, y?: number, scale?: number, spriteSrc?: string) {
    this.name = nome;
    this._x = x || null;
    this._y = y || null;
    this._spriteSrc = spriteSrc || `src/assets/personagem/${nome}.png`;
    this.scale = scale || 95;
  }

  /**
   * Espera o carregamento da imagem referenciada e então 
   * instância a imagem como sprite
   * @param src Caminho para o arquivo contendo o sprite
   */
  protected async setSprite(src: string): Promise<void> {
    this._sprite = await ImageLoader.get(src);
  }

  async setup(): Promise<void> {
    await this.setSprite(this._spriteSrc);
  }

  /**
   * Retorna a imagem associada ao sprite do personagem
   */
  public get sprite(): HTMLImageElement | null {
    return this._sprite;
  }

  public set position({ x = 0, y = 0 }: { x?: number, y?: number }) {
    this._x = x;
    this._y = y;
  }

  public get position(): { x?: number, y?: number } {
    return { x: this._x || 0, y: this._y || 0 };
  }
}




let TT = new Actor("TT");
let Oco = new Actor("Oco");
let Bru = new Actor("Bru");
let Mii = new Actor("Mii");
let Plexu = new Actor("Plexu");
let Komaro = new Actor("Komaro");
let Iniv = new Actor("Iniv");



let personagens: Actor[] = [TT, Oco, Bru, Mii, Plexu, Komaro, Iniv];