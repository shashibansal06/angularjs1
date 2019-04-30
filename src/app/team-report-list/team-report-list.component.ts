import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-report-list',
  templateUrl: './team-report-list.component.html',
  styleUrls: ['./team-report-list.component.scss']
})
export class TeamReportListComponent implements OnInit {
  statusList = [
    {
      id: '0213AAD',
      status: 'Assigned',
      title: 'Spelling mistake in Heading1',
      siteName: 'Amazon',
      siteUrl: 'www.amazon.com',
      date: '28th Nov 2017',
    },
    {
      id: '0313AAD',
      status: 'Reopened',
      title: 'Spelling mistake in Heading2',
      siteName: 'Flipkart',
      siteUrl: 'www.amazon.com',
      date: '29th Nov 2017',
    },
    {
      id: '0513AAD',
      status: 'Completed',
      title: 'Spelling mistake in Heading2',
      siteName: 'Flipkart',
      siteUrl: 'www.amazon.com',
      date: '29th Nov 2017',
    },
    {
      id: '0413AAD',
      status: 'Marked as resolved',
      title: 'Spelling mistake in Heading3',
      siteName: 'Flipkart',
      siteUrl: 'www.amazon.com',
      date: '29th Nov 2017',
    },
    {
      id: '041553AAD',
      status: 'Approved',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      siteUrl: 'www.amazon.com',
      date: '29th Nov 2017',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
