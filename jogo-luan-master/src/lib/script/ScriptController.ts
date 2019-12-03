class ScriptController extends Script {
  dialog: Dialog | Survey | Battle;

  constructor(episode: number, header: HeaderDialog) {
    super(episode, header);
    this.dialog = header;
  }

  nextDialog(): Dialog | Survey | Battle {
    if (!this.dialog.isFinal()) {
      this.dialog.forward();
      this.dialog = this.dialog.next!;
    }

    return this.dialog;
  }

  isSurvey() {
    return this.dialog instanceof Survey;
  }

  isBattle() {
    return this.dialog instanceof Battle;
  }

  buildScene(): SceneBuilder {
    return new SceneBuilder(
      this.dialog.background || this.header.background!).addActors(this.dialog.speakers).addListenner(this.dialog.listenners);
  }

  isSpeaking(actor: Actor) {
    return this.dialog.speakers.includes(actor)
  }
}