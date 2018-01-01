import { AttentionTrainingFilters } from '../models/attention-training';
import { qpToNumber } from 'app/helpers/query-params';

export const queryParamsToFilters = ({
  lastNumberOfDays,
}: {
  [key in keyof AttentionTrainingFilters]: string
}): AttentionTrainingFilters => ({
  lastNumberOfDays: qpToNumber(lastNumberOfDays),
});
