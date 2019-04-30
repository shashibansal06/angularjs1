import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-history',
  templateUrl: './point-history.component.html',
  styleUrls: ['./point-history.component.scss']
})
export class PointHistoryComponent implements OnInit {
  statusList = [
    {
      id: '0213AAD',
      title: '500',
      siteName: 'Amazon',
      submittedOn: '26th Nov 2017',
      approvedOn: '26th Nov 2017',
      type: 'Spelling mistake',
    },
    {
      id: '0213AAD',
      title: 'Spelling mistake in Heading1',
      siteName: 'Amazon',
      submittedOn: '26th Nov 2017',
      approvedOn: '26th Nov 2017',
      type: 'Spelling mistake',
    },
    {
      id: '0213AAD',
      title: 'Spelling mistake in Heading1',
      siteName: 'Amazon',
      submittedOn: '26th Nov 2017',
      approvedOn: '26th Nov 2017',
      type: 'Spelling mistake',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
