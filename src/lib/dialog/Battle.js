"use strict";
class Battle extends Dialog {
    constructor({ speakers, title, chances, background, critical }) {
        super({ text: title, speakers: speakers, background: background });
        this.score = 0;
        this.barBegin = -100;
        this.barPosition = -40;
        this.barTarget = 0;
        this.barEnd = 100;
        this.lastBetter = null;
        this.direction = "right";
        this.chances = chances || 1;
        this.barCritical = critical || 20;
    }
    tick() {
        if (this.direction !== "stop")
            switch (this.direction) {
                case "right":
                    if (this.barPosition < this.barEnd) {
                        this.barPosition++;
                    }
                    else {
                        this.direction = "left";
                    }
                    break;
                default:
                    if (this.barPosition > this.barBegin) {
                        this.barPosition--;
                    }
                    else {
                        this.direction = "right";
                    }
                    break;
            }
    }
    get barSize() {
        return Math.abs(this.barBegin) + Math.abs(this.barEnd);
    }
    get barIndex() {
        return this.barPosition + (this.barSize / 2);
    }
    hit() {
        let tmpScore = 100 + (-Math.abs(this.barPosition));
        if (this.chances > 0) {
            if (tmpScore > this.score) {
                this.score = tmpScore;
                this.lastBetter = this.barIndex;
            }
            this.chances--;
        }
        if (this.chances <= 0) {
            this.direction = "stop";
            this.barPosition;
            console.log(this.score);
        }
        ;
    }
    isFinal() {
        return this.next === null;
    }
    forward() {
        if (this.next !== null)
            this.next.prev = this;
    }
    resolve() {
        return new Promise((resolve) => {
            resolve(this.score);
        });
    }
}
