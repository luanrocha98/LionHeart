interface Option {
  title: string;
  id?: number;
  course: Dialog | null;
}

class Survey extends Dialog {
  private readonly options: Option[] = [];
  private _selected: Option;

  constructor({ speakers, title, options, background, listenners }: {
    speakers: Actor[]; title?: string; options: Option[]; background?: HTMLImageElement; listenners?: Actor[]
  }) {
    super({ text: title || "", speakers: speakers, background: background, listenners: listenners });
    options.forEach((item, index) => {
      this.options.push({ title: item.title, id: index, course: item.course });
    })
    this._selected = this.options[0];
  }

  getOptions(): Option[] {
    return this.options;
  }

  selectOption(n: number): void {
    if (n >= this.options.length || n < 0) return;
    this._selected = this.options[n];
  }

  value(): Option {
    return this._selected;
  }

  get next(): Dialog {
    return this._selected.course!;
  }

  set next(val: Dialog) {
    return;
  }

  get selected(): number {
    return this._selected.id!;
  }

  get title(): string {
    return this.content;
  }

  public isFinal(): boolean {
    return this._selected.course === null;
  }

  public forward(): void {
    if (!this.isFinal())
      this.next!.prev = this;
  }
}
