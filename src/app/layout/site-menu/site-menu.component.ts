import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tq-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
