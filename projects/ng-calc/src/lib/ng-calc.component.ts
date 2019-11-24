import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-calc',
  template: `
    <p>
      ng-calc works!
    </p>
  `,
  styles: []
})
export class NgCalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

}
