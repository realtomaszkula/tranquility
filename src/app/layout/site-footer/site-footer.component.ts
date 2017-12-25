import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

interface Link {
  icon: string;
  url: string;
}

@Component({
  selector: 'tq-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
})
export class SiteFooterComponent implements OnInit {
  links: Link[] = [
    { url: '/home', icon: 'home' },
    { url: '/attention-training', icon: 'surround_sound' },
    { url: '/page2', icon: 'star' },
    { url: '/page3', icon: 'star' },
    { url: '/page4', icon: 'star' },
  ];

  constructor() {}

  ngOnInit() {}
}
