interface Observer<T> {
  update(o: T): void;
}