"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Prepara uma imagem e retorna um elemento de imagem
 * @param src Caminho para o arquivo contendo a imagem
 */
function getImage(src) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    });
}
/**
 * Retorna um número baseado numa escala em porcentagem
 * ex: entra 100, 2 => 200
 * @param initial O valor para ser escalado
 * @param factor O fator de escalamento
 */
function scaleDimension(initial, factor) {
    return initial * (factor / 100);
}
