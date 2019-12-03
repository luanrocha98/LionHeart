class Battle extends Dialog {
  chances: number;

  score: number = 0;

  barBegin: number = -100;
  barPosition: number = -40;
  barTarget: number = 0;
  barEnd: number = 100;
  barCritical: number; // 20 para cada lado a partir do zero
  lastBetter: number | null = null;

  direction: string = "right";

  constructor({ speakers, title, chances, background, critical }: {
    speakers: Actor[]; title: string; chances?: number, background?: HTMLImageElement;
    critical?: number;
  }) {
    super({ text: title, speakers: speakers, background: background });
    this.chances = chances || 1;
    this.barCritical = critical || 20;
  }

  tick() {
    if (this.direction !== "stop")
      switch (this.direction) {
        case "right":
          if (this.barPosition < this.barEnd) {
            this.barPosition++;
          } else {
            this.direction = "left"
          }
          break;
        default:
          if (this.barPosition > this.barBegin) {
            this.barPosition--;
          } else {
            this.direction = "right"
          }
          break;
      }
  }

  get barSize(): number {
    return Math.abs(this.barBegin) + Math.abs(this.barEnd)
  }

  get barIndex(): number {
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
      this.barPosition
      console.log(this.score);
    };
  }

  public isFinal(): boolean {
    return this.next === null;
  }

  forward(): void {
    if (this.next !== null)
      this.next!.prev = this;
  }

  resolve(): Promise<number> {
    return new Promise((resolve) => {
      resolve(this.score);
    })
  }
}