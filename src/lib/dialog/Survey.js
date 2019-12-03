"use strict";
class Survey extends Dialog {
    constructor({ speakers, title, options, background, listenners }) {
        super({ text: title || "", speakers: speakers, background: background, listenners: listenners });
        this.options = [];
        options.forEach((item, index) => {
            this.options.push({ title: item.title, id: index, course: item.course });
        });
        this._selected = this.options[0];
    }
    getOptions() {
        return this.options;
    }
    selectOption(n) {
        if (n >= this.options.length || n < 0)
            return;
        this._selected = this.options[n];
    }
    value() {
        return this._selected;
    }
    get next() {
        return this._selected.course;
    }
    set next(val) {
        return;
    }
    get selected() {
        return this._selected.id;
    }
    get title() {
        return this.content;
    }
    isFinal() {
        return this._selected.course === null;
    }
    forward() {
        if (!this.isFinal())
            this.next.prev = this;
    }
}
