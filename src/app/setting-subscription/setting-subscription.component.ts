import { Component, OnInit  , ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-setting-subscription',
  templateUrl: './setting-subscription.component.html',
  styleUrls: ['./setting-subscription.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingSubscriptionComponent implements OnInit {
  value: number = 5;
  options: Options = {
    floor: 50,
    ceil: 300,
    tickStep: 50,
    showTicks: true,
    showSelectionBar: true,
    ticksTooltip: (value: number): string => {
      return 'Tooltip for ' + value;
    },
    translate: (value: number): string => {
      return '$' + value + '<h6>BUY NOW</h6>';
    },
    getLegend: (value: number): string => {
      return value + '<br/><p>Lychees</p>';
    },
    getSelectionBarColor: (value: number): string => {
      return '#042DE0';
    },
    getPointerColor: (value: number): string => {
      return '#fff';
    },
  };
  constructor() { }

  ngOnInit() {

  }

}
