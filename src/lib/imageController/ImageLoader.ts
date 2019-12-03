/**
 * Responsável por retornar e/ou carregar
 *  imagens e tratar erros referentes a elas
 */
class ImageLoader {
  static async get(src: string): Promise<HTMLImageElement | null> {
    let image: HTMLImageElement | null = null;

    await getImage(src).then((img) => {
      image = img;
    }).catch((err: Error) => {
      image = null;
      console.error(err.message);
    })

    return image;
  }
}