import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tq-last-number-of-days-filter',
  templateUrl: './last-number-of-days-filter.component.html',
  styleUrls: ['./last-number-of-days-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastNumberOfDaysFilterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLastNumberOfDays(lastNumberOfDays: number | null) {
    this.router.navigate([], {
      queryParams: {
        lastNumberOfDays,
      },
    });
  }
}
