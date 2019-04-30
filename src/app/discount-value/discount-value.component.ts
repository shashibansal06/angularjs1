import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-discount-value',
  templateUrl: './discount-value.component.html',
  styleUrls: ['./discount-value.component.scss']
})
export class DiscountValueComponent implements OnInit {
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
  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService
  ) { }
  createNewDiscountModal() {
    const initialState = {
      modalContent: 'New discount value has been created successfully .',
      modalImage: 'discountIcon.svg'
    };
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState,
      class: 'customModal'
    });
    this.bsModalRef.content.closeBtnName = 'Ok';
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        console.log('reason');
      })
    );
  }
  ngOnInit() {
  }

}
