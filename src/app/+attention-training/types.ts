export enum AttentionTrainingKey {
  id = 'id',
  startDate = 'startDate',
  endDate = 'endDate',
  soundChangeInterval = 'soundChangeInterval',
}

export interface AttentionTrainingFilters {
  startDate: null | string;
  endDate: null | string;
}

export interface AttentionTraining {
  startDate: Date;
  endDate: Date;
  soundChangeInterval: number;
}
