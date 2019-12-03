class SceneBuilder {
  actors: Set<Actor> = new Set();
  background: HTMLImageElement;
  listenning: Actor[] = [];

  constructor(background: HTMLImageElement) {
    this.background = background;
  }

  addActor(actor: Actor) {
    this.actors.add(actor);
    return this;
  }

  addActors(actors: Actor[]) {
    actors.forEach((actor) => {
      this.actors.add(actor);
    })
    return this;
  }

  addListenner(listenning: Actor[]){
    this.listenning = listenning;
    return this;
  }

  removeActor(actor: Actor) {
    this.actors.delete(actor);
    return this;
  }

  removeActors(actors: Actor[]) {
    actors.forEach((actor) => {
      this.actors.delete(actor);
    })
    return this;
  }

  build() {
    return new Scene(Array.from(this.actors), this.background, this.listenning);
  }
}