abstract class Chat {
  backgroundColor: string = "rgba(200, 200, 200, 0.7)";

  width: number = 600;
  height: number = 140;

  fontSize: number = 28;
  fontColor: string = "black";

  constructor({ width = 600, height = 140, fontSize = 28, fontColor = "black" }: { width?: number; height?: number; fontSize?: number; fontColor?: string; } = {}) {
    this.width = width;
    this.height = height;

    this.fontSize = fontSize;
    this.fontColor = fontColor;
  }
}