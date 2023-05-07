import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div (cdkObserveContent)="projectContentChanged()">
      <ng-content></ng-content>
    </div>
  `
})
export class HelloComponent  {
   projectContentChanged() {
    console.log('changed');
  }
}
