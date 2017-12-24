import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { routingAnimation } from 'app/animations/routing';

@Component({
  selector: 'tq-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routingAnimation],
})
export class LayoutComponent implements OnInit {
  @Input() outlet: RouterOutlet;

  constructor() {}

  ngOnInit() {}

  prepRouteState() {
    return this.outlet.activatedRouteData['animation'] || of(Math.random());
  }
}
