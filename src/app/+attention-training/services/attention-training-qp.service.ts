import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, filter, pluck, tap } from 'rxjs/operators';
import { parse } from 'fecha';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { AttentionTrainingKey, AttentionTrainingFilters } from '../types';

@Injectable()
export class AttentionTrainingQpService {
  constructor() {}

  getQp$(activatedRoute: ActivatedRoute): Observable<AttentionTrainingFilters> {
    const startDate$ = activatedRoute.queryParamMap.pipe(
      map(paramsMap => paramsMap.get(AttentionTrainingKey.startDate)),
      map(
        dateString =>
          dateString
            ? (parse(dateString, 'DD-MM-YYYY') as Date).toISOString()
            : null,
      ),
    );

    const endDate$ = activatedRoute.queryParamMap.pipe(
      map(paramsMap => paramsMap.get(AttentionTrainingKey.endDate)),
      map(
        dateString =>
          dateString
            ? (parse(dateString, 'DD-MM-YYYY') as Date).toISOString()
            : null,
      ),
    );

    return combineLatest(startDate$, endDate$).pipe(
      map(([startDate, endDate]) => ({
        startDate,
        endDate,
      })),
    );
  }
}
