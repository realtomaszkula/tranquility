import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionTrainingComponent } from './containers/attention-training/attention-training.component';
import { NewAttentionTrainingComponent } from 'app/+attention-training/containers/new-attention-training/new-attention-training.component';

const routes: Routes = [
  {
    path: '',
    component: AttentionTrainingComponent,
    data: {
      fabIcon: 'home',
    },
  },
  {
    path: 'new',
    component: NewAttentionTrainingComponent,
    data: {
      hideFab: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionTrainingRoutingModule {}
