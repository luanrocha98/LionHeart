"use strict";
class ScriptController extends Script {
    constructor(episode, header) {
        super(episode, header);
        this.dialog = header;
    }
    nextDialog() {
        if (!this.dialog.isFinal()) {
            this.dialog.forward();
            this.dialog = this.dialog.next;
        }
        return this.dialog;
    }
    isSurvey() {
        return this.dialog instanceof Survey;
    }
    isBattle() {
        return this.dialog instanceof Battle;
    }
    buildScene() {
        return new SceneBuilder(this.dialog.background || this.header.background).addActors(this.dialog.speakers).addListenner(this.dialog.listenners);
    }
    isSpeaking(actor) {
        return this.dialog.speakers.includes(actor);
    }
}
