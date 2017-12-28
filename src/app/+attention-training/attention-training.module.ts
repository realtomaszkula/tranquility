import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './ngrx/reducer';
import { AttentionTrainingEffects } from './ngrx/effects';

import { AttentionTrainingRoutingModule } from './attention-training-routing.module';
import { AttentionTrainingComponent } from './attention-training.component';
import { DBService } from './services/db.service';
import { QueryParamsService } from './services/query-params.service';
import { FiltersService } from './services/filters.service';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AttentionTrainingRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    StoreModule.forFeature('attentionTraining', reducer),
    EffectsModule.forFeature([AttentionTrainingEffects]),
  ],
  declarations: [AttentionTrainingComponent],
  providers: [DBService, QueryParamsService, FiltersService],
})
export class AttentionTrainingModule {}
