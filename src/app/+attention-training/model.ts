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
  id: number;
  startDate: Date;
  endDate: Date;
  soundChangeInterval: number;
}
