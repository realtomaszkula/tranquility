import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';

import { LayoutComponent } from './layout.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteContentComponent } from './site-content/site-content.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { FabMiniButtonComponent } from './fab-mini-button/fab-mini-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  declarations: [
    LayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteContentComponent,
    SiteMenuComponent,
    FabButtonComponent,
    FabMiniButtonComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
