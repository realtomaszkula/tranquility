import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from 'app/reducers';
import * as layout from 'app/layout/actions/layout.actions';

@Component({
  selector: 'tq-fab-mini-button',
  templateUrl: './fab-mini-button.component.html',
  styleUrls: ['./fab-mini-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabMiniButtonComponent implements OnInit {
  fabIcon$: Observable<string>;
  showFab$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showFab$ = this.store.select(fromRoot.getShowFabMini);
    this.fabIcon$ = this.store.select(fromRoot.getFabMiniIcon);
  }

  ngOnInit() {}

  onFab() {
    this.store.dispatch(new layout.ClickFabMini());
  }
}
