"use strict";
class Queue {
    constructor() {
        this._store = [];
    }
    push(val) {
        this._store.push(val);
    }
    poll() {
        return this._store.shift();
    }
    isEmpty() {
        return this._store.length === 0;
    }
    top() {
        return this._store[0];
    }
}
