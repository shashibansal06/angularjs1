import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {

  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  addProjectModal() {

  }

  deleteConfirmationModal() {
    const initialState = {
      modalContent: 'Are you sure you want to delete this project?',
      modalImage: 'delete-img.svg'
    };
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState,
      class: 'customModal'
    });
    this.bsModalRef.content.closeBtnName = 'Yes';
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        console.log('reason');
      })
    );
  }

  projectAddedModal() {
    const initialState = {
      modalContent: 'Project added successfully.',
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
  projectupdateModal() {
    const initialState = {
      modalContent: 'Project updated successfully.',
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

}
