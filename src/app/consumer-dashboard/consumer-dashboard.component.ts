import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.scss']
})
export class ConsumerDashboardComponent implements OnInit {
  statusList = [
    {
      id: '0213AAD',
      status: 'Approved by SP',
      title: 'Spelling mistake in Heading1',
      siteName: 'Amazon',
      quantity: '200',
      date: '26th Nov 2017',
    },
    {
      id: '041553AAD',
      status: 'Declined by SP',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      quantity: '200',
      date: '26th Nov 2017',
    },
    {
      id: '041553AAD',
      status: 'No action Taken',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      quantity: '200',
      date: '26th Nov 2017',
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
