/* tslint:disable:no-multiline-string */
/**
 * @class AppComponent
 */
import {Component} from '@angular/core';
import {CounterComponent} from './counter-component/index';

@Component({
  directives: [CounterComponent],
  selector: 'sg-my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <sg-counter-component></sg-counter-component>
  `,
})
export class AppComponent {
}
