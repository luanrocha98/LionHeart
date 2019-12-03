class ActorBuilder {

  private scale?: number;

  private name: string = "";
  private x: number = 0;
  private y: number = 100;

  public setName(name: string) {
    this.name = name;
    return this;
  }

  public setPosition({ x = 0, y = 100 }: { x?: number, y?: number }) {
    this.x = x;
    this.y = y;
    return this;
  }

  public setScale(n: number) {
    this.scale = n;
    return this;
  }

  private reset(): void {
    this.scale = undefined;
    this.name = "";
    this.x = 0;
    this.y = 100;
  }


  build() {
    let actor = new Actor(this.name, this.x, this.y, this.scale);
    this.reset();
    return actor;
  }
}