import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService
  ) { }
  ngOnInit() {
  }

  feedbackModal() {
    const initialState = {
      modalContent: 'Your feedback has been successfully submitted.',
      modalImage: 'resolved.svg'
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
}
