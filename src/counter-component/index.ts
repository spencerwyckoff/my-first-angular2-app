/* tslint:disable:no-multiline-string */
/**
 * @class CounterComponent
 */
import {Component} from '@angular/core';
import {CounterStore} from './counter.store';
import {CounterButton} from './counter.button';

@Component({
  directives: [CounterButton],
  providers: [CounterStore],
  selector: 'sg-counter-component',
  template: `
    <h2>Counter Component</h2>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <sg-counter-button [name]="decrement" [value]="decrementValue"></sg-counter-button>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <sg-counter-button [name]="increment" [value]="incrementValue"></sg-counter-button>
      </div>
          
    </div>
  `,
})
export class CounterComponent {
  public decrement: string = 'decrement';
  public increment: string = 'increment';
  public decrementValue: number = 1;
  public incrementValue: number = 2;
}
