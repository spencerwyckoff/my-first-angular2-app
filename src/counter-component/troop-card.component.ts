/* tslint:disable:no-multiline-string */
/**
 * @class
 */
import {Component, Input} from '@angular/core';
import {ITroopCard} from '../troop-card.interface';

@Component({
  selector: 'cocc-troop-card',
  template: `<div class="demo-card-square mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title mdl-card--expand">
    <h2 class="mdl-card__title-text">{{troop.troop}}</h2>
  </div>
  <div class="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      View Updates
    </a>
  </div>
</div>`,
})
export class TroopCard {
  @Input() public troop: ITroopCard[];
}
