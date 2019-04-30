import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-setting-transaction',
  templateUrl: './setting-transaction.component.html',
  styleUrls: ['./setting-transaction.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingTransactionComponent implements OnInit {
  transactionList = [
    {
      id: '3423423fefrwr324',
      title: '2500',
      date: '26th Nov 2017',
      validFrom: '26th Nov 2017',
      validTill: '26th Nov 2017',
      amount: '49.90',
    },
    {
      id: '3423423fefrwr325',
      title: '2500',
      date: '26th Nov 2017',
      validFrom: '26th Nov 2017',
      validTill: '26th Nov 2017',
      amount: '4.90',
    },
    {
      id: '3423423fefrwr326',
      title: '2500',
      date: '26th Nov 2017',
      validFrom: '26th Nov 2017',
      validTill: '26th Nov 2017',
      amount: '100.90',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
