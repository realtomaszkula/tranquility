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

import { reducers } from './reducers';
import { AttentionTrainingEffects } from './effects/list.effects';
import { TimerEffects } from './effects/timer.effects';

import { AttentionTrainingRoutingModule } from './attention-training-routing.module';
import { DBService } from './services/db.service';
import { FiltersService } from './services/filters.service';
import { AttentionTrainingComponent } from './containers/attention-training/attention-training.component';
import { AttentionTrainingCardComponent } from './components/attention-training-card/attention-training-card.component';
import { NewAttentionTrainingComponent } from './containers/new-attention-training/new-attention-training.component';

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
    StoreModule.forFeature('attentionTraining', reducers),
    EffectsModule.forFeature([AttentionTrainingEffects, TimerEffects]),
  ],
  declarations: [
    AttentionTrainingComponent,
    AttentionTrainingCardComponent,
    NewAttentionTrainingComponent,
  ],
  providers: [DBService, FiltersService],
})
export class AttentionTrainingModule {}
