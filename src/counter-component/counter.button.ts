/* tslint:disable:no-multiline-string */
/**
 * @class CounterButton
 */
import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CounterStore} from './counter.store';

@Component({
  selector: 'sg-counter-button',
  template: `
    <h3>{{counter | async}}</h3>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            (click)="click()">
      {{name}}
    </button>
  `,
})
export class CounterButton {
  @Input() public value: number;
  @Input() public name: string;
  public counter: Observable<number>;
  private _counter: CounterStore;

  constructor(counter: CounterStore) {
    this._counter = counter;
    this.counter = this._counter.counter;
  }

  public click(): void {
    this.name === 'increment' ? this._counter.incrementCounter(this.value) :
                                this._counter.decrementCounter(this.value);
  }
}
