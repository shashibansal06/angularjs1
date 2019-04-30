import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member-report-list',
  templateUrl: './team-member-report-list.component.html',
  styleUrls: ['./team-member-report-list.component.scss']
})
export class TeamMemberReportListComponent implements OnInit {
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
      id: '041553AAD',
      status: 'Approved',
      title: 'Spelling mistake in Heading5',
      siteName: 'Flipkart',
      quantity: '200',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
