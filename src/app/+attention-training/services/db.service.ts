import { Injectable } from '@angular/core';
import { UpgradeDB, Cursor } from 'idb';
import { Observable } from 'rxjs/Observable';

import { daysAgo } from 'app/helpers/days-ago';
import { IndexDB } from '@classes/index';
import {
  AttentionTraining,
  AttentionTrainingKey,
  AttentionTrainingFilters,
} from '../models/attention-training';

export interface GetAllParams {
  filters: AttentionTrainingFilters;
  afterCursor: number;
}

@Injectable()
export class DBService extends IndexDB<AttentionTraining> {
  readonly dbName = 'tranquility';
  readonly storeName = 'attention_training';

  getAll({ filters, afterCursor }: GetAllParams): Promise<AttentionTraining[]> {
    const range = IDBKeyRange.lowerBound(daysAgo(filters.lastNumberOfDays));

    const results = [];
    return this.dbPromise
      .then(db => {
        const tx = db.transaction(this.storeName);
        const store = tx.objectStore(this.storeName);
        const index = store.index(AttentionTrainingKey.trainingDate);
        return index.openCursor(range);
      })
      .then(function showRange(cursor: Cursor) {
        if (!cursor) {
          return;
        }

        results.push(cursor.value);
        return cursor.continue().then(showRange);
      })
      .then(() => results);
  }

  upgradeCallback = (db: UpgradeDB) => {
    switch (db.oldVersion) {
      case 0:
        db.createObjectStore(this.storeName, {
          keyPath: AttentionTrainingKey.id,
          autoIncrement: true,
        });

        const store = db.transaction.objectStore(this.storeName);

        store.createIndex(
          AttentionTrainingKey.trainingDate,
          AttentionTrainingKey.trainingDate,
          { unique: false },
        );
    }
  };
}
