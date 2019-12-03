"use strict";
/**
 * Responsável por renderizar objetos no canvas.
 * Recebe o id  e o fator de escalamento de largura e altura para as imagens
 */
class Display {
    constructor(id, widthScale = 80, heightScale = 90) {
        Display.canvas = document.getElementById(id);
        Display.context = Display.canvas.getContext('2d');
        Display.width = scaleDimension(window.innerWidth, widthScale);
        Display.height = scaleDimension(window.innerHeight, heightScale);
        Display.canvas.width = Display.width;
        Display.canvas.height = Display.height;
    }
    // desenha uma imagem 
    static image({ img, x, y, width, height, opacity = 1 }) {
        if (img === null)
            return;
        Display.context.globalAlpha = opacity;
        Display.context.drawImage(img, 0, 0, img.width, img.height, x, y, width, height);
        Display.context.globalAlpha = 1;
    }
    // Carrega um plano de fundo no canvas
    static background(img) {
        if (img === null)
            return;
        Display.image({ img, x: 0, y: 0, width: Display.width, height: Display.height });
    }
    // desenha uma imagem na posição indicada
    static imageAndScale({ img, x = 0, y = 0, scale, opacity }) {
        if (img === null)
            return;
        Display.image({
            img: (img),
            x, y,
            width: scaleDimension(img.width, scale || 100),
            height: scaleDimension(img.height, scale || 100),
            opacity
        });
    }
    // desenha uma imagem na altura do "chão"
    static onFloor({ img, x = 0, scale, opacity }) {
        if (img === null)
            return;
        let y = Display.height - scaleDimension(img.height, scale || 100);
        Display.imageAndScale({ img, x, y, scale, opacity });
    }
}
