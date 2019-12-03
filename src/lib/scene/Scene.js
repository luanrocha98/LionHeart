"use strict";
/**
 * Uma cena controla a exibição através de um roteiro.
 *
 * Ela indica quem está aparecendo, quem ouve e quem fala.
 */
class Scene {
    constructor(actors, background, listenning = []) {
        this._actors = new Set();
        this._listenning = new Set();
        actors.forEach((actor) => {
            this._actors.add(actor);
        });
        listenning.forEach((actor) => {
            this._listenning.add(actor);
        });
        this._background = background;
    }
    controller(callback) {
        callback(this.actors, this.background, this.listenners);
    }
    get actors() {
        return Array.from(this._actors.values());
    }
    get listenners() {
        return Array.from(this._listenning.values());
    }
    get background() {
        return this._background;
    }
}
