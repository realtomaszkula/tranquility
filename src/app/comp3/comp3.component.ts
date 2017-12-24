import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tq-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
