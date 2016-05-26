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
  selector: 'cocc-counter-component',
  template: `
    <h2>Counter Component</h2>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <cocc-counter-button [name]="decrement" [value]="decrementValue"></cocc-counter-button>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <cocc-counter-button [name]="increment" [value]="incrementValue"></cocc-counter-button>
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
