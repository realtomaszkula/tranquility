import idb, { DB, UpgradeDB } from 'idb';

export abstract class IndexDB<T> {
  private db: Promise<DB>;

  abstract readonly dbName: string;
  abstract readonly storeName: string;
  abstract readonly upgradeCallback: (db: UpgradeDB) => void;

  get dbPromise(): Promise<DB> {
    if (!this.db) {
      this.db = idb.open(this.dbName, 1, this.upgradeCallback.bind(this));
    }
    return this.db;
  }

  constructor() {}

  get(key: any): Promise<T> {
    return this.dbPromise.then(db => {
      return db
        .transaction(this.storeName)
        .objectStore(this.storeName)
        .get(key);
    });
  }

  add(val: Partial<T>, key?: keyof T): Promise<T> {
    return this.dbPromise
      .then(async db => {
        const tx = db.transaction(this.storeName, 'readwrite');
        const id = tx.objectStore(this.storeName).add(val, key);
        await tx.complete;
        return id;
      })
      .then(id => this.get(id));
  }

  set(key: keyof T, val: Partial<T>): Promise<T> {
    return this.dbPromise.then(async db => {
      const tx = db.transaction(this.storeName, 'readwrite');
      const id = tx.objectStore(this.storeName).put(val, key);
      await tx.complete;
      return id;
    })
    .then(id => this.get(id));
  }

  delete(key: keyof T): Promise<void> {
    return this.dbPromise.then(async db => {
      const tx = db.transaction(this.storeName, 'readwrite');
      const id = tx.objectStore(this.storeName).delete(key);
      return tx.complete;
    });
  }

  clear() {
    return this.dbPromise.then(db => {
      const tx = db.transaction(this.storeName, 'readwrite');
      tx.objectStore(this.storeName).clear();
      return tx.complete;
    });
  }

  keys() {
    return this.dbPromise.then(db => {
      const tx = db.transaction(this.storeName);
      const keys = [];
      const store = tx.objectStore(this.storeName);

      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) {
          return;
        }
        keys.push(cursor.key);
        cursor.continue();
      });

      return tx.complete.then(() => keys);
    });
  }
}
