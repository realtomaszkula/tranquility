import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class AttentionTrainingFiltersService {
  filters: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filters = this.fb.group({
      startDate: [null],
      endDate: [null],
    });
  }
}
