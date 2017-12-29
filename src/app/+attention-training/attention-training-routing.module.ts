import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabMiniButtonData } from 'app/layout/models/fab-mini-button';
import { FabButtonData } from 'app/layout/models/fab-button';
import { NewAttentionTrainingComponent } from './containers/new-attention-training/new-attention-training.component';
import { AttentionTrainingComponent } from './containers/attention-training/attention-training.component';

const routes: Routes = [
  {
    path: '',
    component: AttentionTrainingComponent,
    data: {
      showFab: true,
      fabIcon: 'add',
    } as FabButtonData,
  },
  {
    path: 'new',
    component: NewAttentionTrainingComponent,
    data: {
      showFabMini: true,
      fabMiniIcon: 'save',
    } as FabMiniButtonData,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionTrainingRoutingModule {}
