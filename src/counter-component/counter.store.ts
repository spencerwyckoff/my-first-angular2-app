/**
 * @class CounterStore
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CounterStore {
  public counter: Observable<number>;
  private _counter: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.counter = this._counter.asObservable();
  }

  public incrementCounter(value: number): void {
    this._counter.next(this._counter.getValue() + value);
  }

  public decrementCounter(value: number): void {
    this._counter.next(this._counter.getValue() - value);
  }
}
