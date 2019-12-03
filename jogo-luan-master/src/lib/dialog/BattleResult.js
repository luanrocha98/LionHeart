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
class BattleResult extends Dialog {
    constructor({ speakers, title = "", background, winnerText, loserText, goal }) {
        super({ text: (title), speakers: speakers, background: background });
        this.winnerText = winnerText;
        this.loserText = loserText;
        this.goal = goal || 50;
    }
    winner() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this._prev.resolve().then((score) => score >= this.goal));
        });
    }
    isFinal() {
        return this.next !== null;
    }
    forward() {
        if (!this.isFinal())
            this.next.prev = this;
    }
    after() {
        this.content = (this.winner()) ? this.winnerText : this.loserText;
        return this;
    }
}
