import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { FabButtonComponent } from './fab-button.component';
import { FabButtonService } from './fab-button.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [FabButtonComponent],
  exports: [FabButtonComponent],
})
export class FabButtonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FabButtonModule,
      providers: [FabButtonService],
    };
  }
}
