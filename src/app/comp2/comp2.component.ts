import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tq-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
