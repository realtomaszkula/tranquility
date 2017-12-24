import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tq-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
