// root component for the Apps

/* tslint:disable:no-multiline-string */
/**
 * @class AppComponent
 */
import {Component} from '@angular/core';
import {CounterComponent} from './counter-component/index';
import {CoC} from './coc.ts';
import {SiteHeaderComponent} from './site-header/site-header.component.ts';

@Component({
  directives: [CounterComponent, CoC, SiteHeaderComponent],
  selector: 'cocc-calculator',
  templateUrl: 'src/app.component.html',
})

export class AppComponent {
}
