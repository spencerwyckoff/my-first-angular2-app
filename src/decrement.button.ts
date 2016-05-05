/* tslint:disable:no-multiline-string */
/**
 * @class DecrementButton
 */
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {CounterStore} from './counter.store';

@Component({
  selector: 'sg-decrement-button',
  template: `
    <h2>{{counter | async}}</h2>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            (click)="decrement()">
      Decrement
    </button>
  `,
})
export class DecrementButton {
  public counter: Observable<number>;
  private _counter: CounterStore;

  constructor(counter: CounterStore) {
    this._counter = counter;
    this.counter = this._counter.counter;
  }

  public decrement(): void {
    this._counter.decrementCounter();
  }
}
