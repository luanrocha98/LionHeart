interface Subject<T> {
  observers: Observer<T>[];

  addObserver(param: Observer<T>): void;
  removeObserver(param: Observer<T>): void;
  notifyObservers(): void;
}