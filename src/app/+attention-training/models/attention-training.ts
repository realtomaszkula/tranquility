export enum AttentionTrainingType {
  beginner = 'beginner',
  advanced = 'advanced',
}

export enum AttentionTrainingKey {
  id = 'id',
  trainingDate = 'trainingDate',
  soundChangeIntervalInSeconds = 'soundChangeIntervalInSeconds',
  trainingDurationInSeconds = 'trainingDurationIntervalInSeconds',
}

export interface AttentionTrainingFilters {
  lastNumberOfDays: number;
}

export interface AttentionTraining {
  id: number;
  trainingDate: Date;
  trainingDurationInSeconds: number;
  soundChangeIntervalInSeconds: number;
}
