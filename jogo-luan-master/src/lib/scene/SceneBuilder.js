"use strict";
class SceneBuilder {
    constructor(background) {
        this.actors = new Set();
        this.listenning = [];
        this.background = background;
    }
    addActor(actor) {
        this.actors.add(actor);
        return this;
    }
    addActors(actors) {
        actors.forEach((actor) => {
            this.actors.add(actor);
        });
        return this;
    }
    addListenner(listenning) {
        this.listenning = listenning;
        return this;
    }
    removeActor(actor) {
        this.actors.delete(actor);
        return this;
    }
    removeActors(actors) {
        actors.forEach((actor) => {
            this.actors.delete(actor);
        });
        return this;
    }
    build() {
        return new Scene(Array.from(this.actors), this.background, this.listenning);
    }
}
