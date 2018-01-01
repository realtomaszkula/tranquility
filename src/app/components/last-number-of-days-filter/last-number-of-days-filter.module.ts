import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
} from '@angular/material';

import { LastNumberOfDaysFilterComponent } from './last-number-of-days-filter.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  declarations: [LastNumberOfDaysFilterComponent],
  exports: [LastNumberOfDaysFilterComponent],
})
export class LastNumberOfDaysFilterModule {}
