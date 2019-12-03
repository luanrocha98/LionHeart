class BattleResult extends Dialog {
  goal: number;
  winnerText: string;
  loserText: string;

  constructor({ speakers, title = "", background, winnerText, loserText, goal }: {
    speakers: Actor[]; title?: string; background?: HTMLImageElement; winnerText: string; loserText: string; goal?: number;
  }) {
    super({ text: (title), speakers: speakers, background: background });

    this.winnerText = winnerText;
    this.loserText = loserText;

    this.goal = goal || 50;
  }

  async winner(): Promise<boolean> {
    return (await (this._prev as Battle).resolve().then((score) => score >= this.goal));
  }

  public isFinal(): boolean {
    return this.next !== null;
  }

  public forward(): void {
    if (!this.isFinal())
      this.next!.prev = this;
  }

  after(): BattleResult {
    this.content = (this.winner()) ? this.winnerText : this.loserText;
    return this;
  }
}