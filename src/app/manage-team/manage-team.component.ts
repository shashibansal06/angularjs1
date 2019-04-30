import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.scss']
})
export class ManageTeamComponent implements OnInit {

  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService
  ) { }
  requestSendModal() {
    const initialState = {
      modalContent: 'Member invite sent successfully.',
      modalImage: 'delete-img.svg'
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
