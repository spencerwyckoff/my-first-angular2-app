/* tslint:disable:no-multiline-string no-console no-backbone-get-set-outside-model */
/**
 * @class CoC
 */
import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {TroopCard} from 'counter-component/troop-card.component';
import {ITroopCard} from './troop-card.interface';

@Component({
  directives: [TroopCard],
  selector: 'sg-coc-app',
  template: `<h1>Clash of Clans Calculator</h1>
              <h4>Troops</h4>
              <ul>
                <li *ngFor="let troop of troops">
                  <sg-troop-card [troop]="troop"></sg-troop-card>
                </li>
              </ul>`,
  viewProviders: [HTTP_PROVIDERS],
})
export class CoC {
  public troops: ITroopCard[];
  constructor(http: Http) {
    http.get('cocJSON.json')
    // call map on the response observable to get the parsed people object
      .map((res: Response) => res.json())
      // subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe((troops: any) => {
        this.troops = troops.list;
        console.log(troops);
      });
  }
}
