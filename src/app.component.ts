/* tslint:disable:no-multiline-string */
/**
 * @class AppComponent
 */
import {Component} from '@angular/core';
import {CounterComponent} from './counter-component/index';
import {CoC} from './coc.ts';

@Component({
  directives: [CounterComponent, CoC],
  selector: 'sg-my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <sg-counter-component></sg-counter-component>
    <sg-coc-app></sg-coc-app>
  `,
})
export class AppComponent {
}
