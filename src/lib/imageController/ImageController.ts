/**
 * Prepara uma imagem e retorna um elemento de imagem 
 * @param src Caminho para o arquivo contendo a imagem
 */
async function getImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject
    img.src = src;
  });
}

/**
 * Retorna um número baseado numa escala em porcentagem
 * ex: entra 100, 2 => 200
 * @param initial O valor para ser escalado
 * @param factor O fator de escalamento
 */
function scaleDimension(initial: number, factor: number): number {
  return initial * (factor / 100);
}