import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tq-site-content',
  templateUrl: './site-content.component.html',
  styleUrls: ['./site-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
