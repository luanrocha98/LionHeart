"use strict";
class Dialog {
    constructor({ text, speakers, background, listenners }) {
        this._next = null;
        this._prev = null;
        this.listenners = [];
        this.speakers = [...speakers];
        this._content = text;
        this.listenners = listenners || [];
        this.background = background || null;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get next() {
        return this._next;
    }
    set next(val) {
        this._next = val;
        if (this._next !== null)
            this._next._prev = this;
    }
    get prev() {
        return this._prev;
    }
    set prev(val) {
        this._prev = val;
    }
    hasNext() {
        return this.next !== null;
    }
}
class DefaultDialog extends Dialog {
    constructor({ text, speakers, after, background, listenners }) {
        super({ text: text, speakers: speakers, background: background, listenners: listenners });
        this.next = after || null;
    }
    isFinal() {
        return this.next === null;
    }
    forward() {
        this.next.prev = this;
    }
}
class HeaderDialog extends Dialog {
    constructor({ text, speakers, after, background, listenners }) {
        super({ text: text, speakers: speakers, background: background, listenners: listenners });
        this.next = after || null;
    }
    isFinal() {
        return this.next === null;
    }
    forward() {
        this.next.prev = this;
    }
}
class FinalDialog extends Dialog {
    constructor({ background }) {
        super({ text: "Isso é tudo, pessoal", speakers: [], background: background });
    }
    isFinal() {
        return true;
    }
    forward() {
        return;
    }
}
