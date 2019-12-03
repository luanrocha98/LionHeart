"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Representa um objeto de jogo para um personagem
 * Possui um nome e um sprite.
 */
class Actor {
    constructor(nome, x, y, scale, spriteSrc) {
        this._sprite = null;
        this._x = null;
        this._y = null;
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
    setSprite(src) {
        return __awaiter(this, void 0, void 0, function* () {
            this._sprite = yield ImageLoader.get(src);
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setSprite(this._spriteSrc);
        });
    }
    /**
     * Retorna a imagem associada ao sprite do personagem
     */
    get sprite() {
        return this._sprite;
    }
    set position({ x = 0, y = 0 }) {
        this._x = x;
        this._y = y;
    }
    get position() {
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
let personagens = [TT, Oco, Bru, Mii, Plexu, Komaro, Iniv];
