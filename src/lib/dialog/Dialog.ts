abstract class Dialog {
  private _content: string;

  protected _next: Dialog | null = null;
  protected _prev: Dialog | null = null;

  public readonly speakers: Actor[];
  public listenners: Actor[] = [];
  public readonly background: HTMLImageElement | null;

  constructor({ text, speakers, background, listenners }: { text: string; speakers: Actor[]; background?: HTMLImageElement; listenners?: Actor[]; }) {
    this.speakers = [...speakers];

    this._content = text;

    this.listenners = listenners || [];
    this.background = background || null;
  }

  get content(): string {
    return this._content;
  }


  set content(content: string) {
    this._content = content;
  }

  get next(): Dialog | null {
    return this._next;
  }

  set next(val: Dialog | null) {
    this._next = val;
    if (this._next !== null)
      this._next._prev = this;
  }

  get prev(): Dialog | null {
    return this._prev;
  }

  set prev(val: Dialog | null) {
    this._prev = val;
  }

  hasNext(): boolean {
    return this.next !== null
  }

  public abstract isFinal(): boolean;
  public abstract forward(): void;
}

class DefaultDialog extends Dialog {
  constructor({ text, speakers, after, background, listenners }: { text: string; speakers: Actor[]; after?: Dialog; background?: HTMLImageElement;  listenners?: Actor[]}) {
    super({ text: text, speakers: speakers, background: background, listenners: listenners });

    this.next = after || null;
  }

  public isFinal(): boolean {
    return this.next === null;
  }

  forward(): void {
    this.next!.prev = this;
  }
}

class HeaderDialog extends Dialog {
  constructor({ text, speakers, after, background, listenners }: { text: string; speakers: Actor[]; after?: Dialog; background: HTMLImageElement; listenners?: Actor[]; }, ) {
    super({ text: text, speakers: speakers, background: background, listenners: listenners });

    this.next = after || null;
  }


  public isFinal(): boolean {
    return this.next === null;
  }

  forward(): void {
    this.next!.prev = this;
  }
}

class FinalDialog extends Dialog {
  constructor({ background }: { background: HTMLImageElement; }, ) {
    super({ text: "Isso é tudo, pessoal", speakers: [], background: background });
  }

  public isFinal(): boolean {
    return true;
  }

  forward(): void {
    return;
  }
}