import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FiltersService {
  private filters: FormGroup;

  filters$: Observable<any>;

  constructor(private fb: FormBuilder) {
    this.filters = this.fb.group({
      startDate: [null],
      endDate: [null],
    });

    this.filters$ = this.filters.valueChanges;
  }

  update(val: any) {
    this.filters.setValue(val, { emitEvent: false });
  }
}
