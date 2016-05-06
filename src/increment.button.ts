/* tslint:disable:no-multiline-string */
/**
 * @class DecrementButton
 */
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CounterStore} from './counter.store';

@Component({
  selector: 'sg-increment-button',
  template: `
    <h2>{{counter | async}}</h2>
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
    this._counter.incrementCounter();
  }
}
