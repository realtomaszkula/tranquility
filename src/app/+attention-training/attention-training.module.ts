import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatCardModule,
  MatListModule,
} from '@angular/material';

import { AttentionTrainingRoutingModule } from './attention-training-routing.module';
import { DBService } from './services/db.service';
import { QueryParamsService } from './services/query-params.service';
import { FiltersService } from './services/filters.service';
import { AttentionTrainingComponent } from './containers/attention-training/attention-training.component';
import { reducer } from './ngrx/reducer';
import { AttentionTrainingEffects } from './ngrx/effects';
import { AttentionTrainingCardComponent } from './components/attention-training-card/attention-training-card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AttentionTrainingRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    StoreModule.forFeature('attentionTraining', reducer),
    EffectsModule.forFeature([AttentionTrainingEffects]),
  ],
  declarations: [AttentionTrainingComponent, AttentionTrainingCardComponent],
  providers: [DBService, QueryParamsService, FiltersService],
})
export class AttentionTrainingModule {}
