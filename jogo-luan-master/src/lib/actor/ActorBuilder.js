"use strict";
class ActorBuilder {
    constructor() {
        this.name = "";
        this.x = 0;
        this.y = 100;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setPosition({ x = 0, y = 100 }) {
        this.x = x;
        this.y = y;
        return this;
    }
    setScale(n) {
        this.scale = n;
        return this;
    }
    reset() {
        this.scale = undefined;
        this.name = "";
        this.x = 0;
        this.y = 100;
    }
    build() {
        let actor = new Actor(this.name, this.x, this.y, this.scale);
        this.reset();
        return actor;
    }
}
