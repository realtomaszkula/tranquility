import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteContentComponent } from './site-content/site-content.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, SiteHeaderComponent, SiteFooterComponent, SiteContentComponent, SiteMenuComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
