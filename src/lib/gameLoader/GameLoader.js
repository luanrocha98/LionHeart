"use strict";
/**
 * Responsável por preparar todos os objetos do jogo e responder a falhas
 * ou mudanças durante o carregamento.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class GameLoader {
    constructor(...objects) {
        this._objects = new Queue();
        objects.forEach((item) => {
            this._objects.push(item);
        });
        this.preloader = new Preloader(100 / objects.length);
    }
    /**
     * Prepara todos os objetos e passa como parâmetro da promise a porcentagem
     * de objetos prontos
     */
    setupObjects() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._objects.isEmpty()) {
                return this.preloader.loader;
            }
            ;
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield this._objects.poll().setup().then(() => __awaiter(this, void 0, void 0, function* () {
                    this.preloader.increment();
                    yield this.setupObjects();
                }));
                resolve(this.preloader.loader);
                reject(this.preloader.fail());
            }));
        });
    }
    /**
     * Função que vai ter como gatilho cada atualização do preloader.
     */
    set onload(callback) {
        this.preloader.onIncrement = callback;
    }
}
