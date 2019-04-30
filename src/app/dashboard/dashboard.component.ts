import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statusList = [
    {
      id: '0213AAD',
      status: 'Assigned',
      title: 'Spelling mistake in Heading1',
      siteName: 'Amazon',
      quantity: '200',
    },
    {
      id: '0313AAD',
      status: 'Reopened',
      title: 'Spelling mistake in Heading2',
      siteName: 'Flipkart',
      quantity: '200',
    },
    {
      id: '0513AAD',
      status: 'Completed',
      title: 'Spelling mistake in Heading2',
      siteName: 'Flipkart',
      quantity: '200',
    },
    {
      id: '0413AAD',
      status: 'Marked as resolved',
      title: 'Spelling mistake in Heading3',
      siteName: 'Flipkart',
      quantity: '200',
    },
    {
      id: '041553AAD',
      status: 'Approved',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      quantity: '200',
    },
    {
      id: '041553AAD',
      status: 'No action Taken',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      quantity: '200',
    },
    {
      id: '041553AAD',
      status: 'Declined',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      quantity: '200', 
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
