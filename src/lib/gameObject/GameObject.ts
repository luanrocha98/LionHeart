/**
 * Interface que representa um objeto que vai participar do jogo.
 */
interface GameObject {
  setup(): Promise<void>;
}