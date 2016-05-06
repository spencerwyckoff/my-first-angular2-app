/* tslint:disable:no-multiline-string */
/**
 * @class AppComponent
 */
import {Component} from '@angular/core';
import {CounterStore} from './counter.store';
import {IncrementButton} from './increment.button';
import {DecrementButton} from './decrement.button';

@Component({
  directives: [IncrementButton, DecrementButton],
  providers: [CounterStore],
  selector: 'sg-my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col">
        <sg-decrement-button></sg-decrement-button>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <sg-increment-button></sg-increment-button>
      </div>
    </div>
  `,
})
export class AppComponent {
}
