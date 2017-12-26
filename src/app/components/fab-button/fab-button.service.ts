import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FabButtonService {
  fabSource = new Subject<void>();
  fab$ = this.fabSource.asObservable();

  constructor() {}
}
