class ScriptBuilder {
  private episode: number;
  private header: HeaderDialog;

  private lastDialog: Dialog;

  constructor(episode: number, header: HeaderDialog) {
    this.episode = episode;
    this.header = header;
    this.lastDialog = this.header;
  }

  addDialog(dialog: Dialog) {
    this.lastDialog.next = dialog;
    this.lastDialog = this.lastDialog.next;
    Script.allActors.push(...this.lastDialog.speakers);
    return this;
  }

  build() {
    return new ScriptController(this.episode, this.header);
  }
}