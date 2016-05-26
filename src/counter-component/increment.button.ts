/* tslint:disable:no-multiline-string */
/**
 * @class DecrementButton
 */
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CounterStore} from './counter.store';

@Component({
  selector: 'cocc-increment-button',
  template: `
    <h3>{{counter | async}}</h3>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            (click)="increment()">
      Increment
    </button>
  `,
})
export class IncrementButton {
  public counter: Observable<number>;
  private _counter: CounterStore;

  constructor(counter: CounterStore) {
    this._counter = counter;
    this.counter = this._counter.counter;
  }

  public increment(): void {
    this._counter.incrementCounter(1);
  }
}
