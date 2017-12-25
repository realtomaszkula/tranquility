import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionTrainingComponent } from './attention-training.component';

const routes: Routes = [{ path: '', component: AttentionTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionTrainingRoutingModule {}
