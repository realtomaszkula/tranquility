import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionTrainingComponent } from './containers/attention-training/attention-training.component';

const routes: Routes = [
  {
    path: '',
    component: AttentionTrainingComponent,
    data: {
      fabIcon: 'home',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionTrainingRoutingModule {}
