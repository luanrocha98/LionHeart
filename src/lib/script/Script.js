"use strict";
/**
 * Um roteiro é a abstração da sequencia de acontecimentos num episódio
 *
 * Ele contém as falas e o número do episódio que deve ser exibido
 */
class Script {
    constructor(episode, header) {
        this.episode = episode;
        this._header = header;
        Script.allActors.push(...header.speakers);
    }
    get header() {
        return this._header;
    }
}
Script.allActors = [];
