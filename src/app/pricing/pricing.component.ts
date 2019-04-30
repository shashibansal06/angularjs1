import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PricingComponent implements OnInit {
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
    // floor: 0,
    // ceil: 1000,
    // step: 5,
    // showTicksValues: true,


    getSelectionBarColor: (value: number): string => {
      return '#042DE0';
    },
    getPointerColor: (value: number): string => {
      return '#fff';
    },

    // stepsArray: [
    //   {value: 50,  legend: 'Lychees'},
    //   {value: 100, legend: 'Lychees'},
    //   {value: 150, legend: 'Lychees'},
    //   {value: 200, legend: 'Lychees'},
    //   {value: 250, legend: 'Lychees'},
    //   {value: 1000, legend: 'Lychees'}
    // ]
  };
  constructor() { }

  ngOnInit() {

  }

}
