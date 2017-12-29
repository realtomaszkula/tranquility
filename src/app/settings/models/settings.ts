export interface AttentionTrainingSettings {
  beginner: {
    soundChangeIntervalInSeconds: number;
  };
  advanced: {
    soundChangeIntervalInSeconds: number;
  };
}

export interface AppSettings {
  attentionTraining: AttentionTrainingSettings;
}
