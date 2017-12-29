import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ClickFab } from '../actions/layout.actions';
import * as fromRoot from 'app/reducers';

@Component({
  selector: 'tq-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent implements OnInit {
  fabIcon$: Observable<string>;
  showFab$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showFab$ = this.store.select(fromRoot.getShowFab);
    this.fabIcon$ = this.store.select(fromRoot.getFabIcon);
  }

  ngOnInit() {}

  onFab() {
    this.store.dispatch(new ClickFab());
  }
}
