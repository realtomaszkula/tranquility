import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const routes: Routes = [
  { path: '', redirectTo: 'attention-training', pathMatch: 'full' },
  {
    path: 'attention-training',
    loadChildren:
      'app/+attention-training/attention-training.module#AttentionTrainingModule',
  },
  {
    path: 'page2',
    component: Comp2Component,
  },
  { path: 'page3', component: Comp3Component },
  { path: 'page4', component: Comp4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
