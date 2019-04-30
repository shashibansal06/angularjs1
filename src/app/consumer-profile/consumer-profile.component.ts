import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumerProfileComponent implements OnInit {
  disountvalueList = [
    {
      website: 'Amazon',
      no: '8000',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      percentage: '20',
      redmeemStatus: 'Yet to Redeem',
      item:'groceries',
    },
    {
      website: 'Amazon',
      no: '2000',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      percentage: '10',
      redmeemStatus: 'Yes',
      item:'groceries',
    },
    {
      website: 'Amazon',
      no: '2001',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      percentage: '30',
      redmeemStatus: '20 Redeemed',
      item:'groceries',
    },
    {
      website: 'Amazon',
      no: '2002',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      percentage: '30',
      redmeemStatus: '20 Redeemed',
      item:'groceries',
    }
  ];

  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'infinite': false,
    'variableWidth': true,
    'arrows': false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          'slidesToShow': 8,
          'arrows': true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          'slidesToShow': 8,
          'arrows': true,
        }
      },
      {
        breakpoint: 479,
        settings: {
          'slidesToShow':4,
          'arrows': true,
          //'variableWidth': false,
        }
      }
    ]
    // 'initialSlide': 4
  };
  constructor() { }
  ngOnInit() {
  }
}
