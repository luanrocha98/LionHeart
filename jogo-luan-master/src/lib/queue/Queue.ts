class Queue<T> {
  private _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  poll(): T | undefined {
    return this._store.shift();
  }

  isEmpty(): boolean {
    return this._store.length === 0;
  }

  top(): T | undefined {
    return this._store[0];
  }
}