import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  disountvalueList = [
    {
      id: '00001',
      website: 'Amazon',
      no: '200',
      code: 'HHH457A4',
      percentage: '20',
      redmeemStatus: 'Yet to Redeem',
    },
    {
      id: '00002',
      website: 'Amazon',
      no: '200',
      code: 'HHH457A4',
      percentage: '10',
      redmeemStatus: 'Yet to Redeem',
    },
    {
      id: '00003',
      website: 'Amazon',
      no: '200',
      code: 'HHH457A4',
      percentage: '30',
      redmeemStatus: '20 Redeemed',
    },
    {
      id: '00003',
      website: 'Amazon',
      no: '200',
      code: 'HHH457A4',
      percentage: '30',
      redmeemStatus: '20 Redeemed',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
