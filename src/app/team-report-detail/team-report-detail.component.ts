import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-team-report-detail',
  templateUrl: './team-report-detail.component.html',
  styleUrls: ['./team-report-detail.component.scss']
})
export class TeamReportDetailComponent implements OnInit {

  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService
  ) { }


  ngOnInit() {
  }
  resolvedModal() {
    const initialState = {
      modalContent: 'Report has been resolved successfully .',
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
