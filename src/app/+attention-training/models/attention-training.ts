export enum AttentionTrainingKey {
  id = 'id',
  trainingDate = 'trainingDate',
  soundChangeIntervalInSeconds = 'soundChangeIntervalInSeconds',
  trainingDurationInSeconds = 'trainingDurationIntervalInSeconds',
}

export interface AttentionTraining {
  id: number;
  trainingDate: Date;
  trainingDurationInSeconds: number;
  soundChangeIntervalInSeconds: number;
}
