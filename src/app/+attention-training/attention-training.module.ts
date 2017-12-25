import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AttentionTrainingRoutingModule } from './attention-training-routing.module';
import { AttentionTrainingComponent } from './attention-training.component';
import { AttentionTrainingService } from './services/attention-training.service';
import { AttentionTrainingQpService } from './services/attention-training-qp.service';
import { AttentionTrainingFiltersService } from './services/attention-training-filters.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AttentionTrainingRoutingModule],
  declarations: [AttentionTrainingComponent],
  providers: [
    AttentionTrainingService,
    AttentionTrainingQpService,
    AttentionTrainingFiltersService,
  ],
})
export class AttentionTrainingModule {}
