import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ClickFab } from '../actions/layout.actions';
import { getShowFab, getFabIcon } from 'app/reducers';

@Component({
  selector: 'tq-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent implements OnInit {
  fabIcon$: Observable<string>;
  showFab$: Observable<boolean>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
  ) {
    this.showFab$ = this.store.select(getShowFab);
    this.fabIcon$ = this.store.select(getFabIcon);
  }

  ngOnInit() {}

  onFab() {
    this.store.dispatch(new ClickFab());
  }
}
