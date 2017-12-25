import { Injectable } from '@angular/core';
import { UpgradeDB } from 'idb';
import { Observable } from 'rxjs/Observable';

import { IndexDB } from '@classes';
import { AttentionTraining, AttentionTrainingKey } from '../types';

@Injectable()
export class AttentionTrainingService extends IndexDB<AttentionTraining> {
  readonly dbName = 'tranquility';
  readonly storeName = 'attention_training';

  upgradeCallback = (db: UpgradeDB) => {
    switch (db.oldVersion) {
      case 0:
        db.createObjectStore(this.storeName, {
          keyPath: AttentionTrainingKey.id,
          autoIncrement: true,
        });

        const store = db.transaction.objectStore(this.storeName);

        store.createIndex(
          AttentionTrainingKey.endDate,
          AttentionTrainingKey.endDate,
          { unique: false },
        );
    }
  };
}
