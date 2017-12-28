import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, filter, pluck, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as moment from 'moment';

import { AttentionTrainingKey, AttentionTrainingFilters } from '../model';

@Injectable()
export class QueryParamsService {
  constructor() {}

  getQp$(activatedRoute: ActivatedRoute): Observable<AttentionTrainingFilters> {
    const startDate$ = activatedRoute.queryParamMap.pipe(
      map(paramsMap => paramsMap.get(AttentionTrainingKey.startDate)),
      map(
        dateString =>
          moment(dateString).isValid()
            ? moment(dateString).format('DD-MM-YYYY')
            : null,
      ),
    );

    const endDate$ = activatedRoute.queryParamMap.pipe(
      map(paramsMap => paramsMap.get(AttentionTrainingKey.endDate)),
      map(
        dateString =>
          moment(dateString).isValid()
            ? moment(dateString).format('DD-MM-YYYY')
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
