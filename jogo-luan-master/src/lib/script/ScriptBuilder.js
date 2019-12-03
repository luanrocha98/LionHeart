"use strict";
class ScriptBuilder {
    constructor(episode, header) {
        this.episode = episode;
        this.header = header;
        this.lastDialog = this.header;
    }
    addDialog(dialog) {
        this.lastDialog.next = dialog;
        this.lastDialog = this.lastDialog.next;
        Script.allActors.push(...this.lastDialog.speakers);
        return this;
    }
    build() {
        return new ScriptController(this.episode, this.header);
    }
}
