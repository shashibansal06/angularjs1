import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  modalContent: string;
  modalImage: string;
  closeBtnName: string;
  constructor(
    public bsModalRef: BsModalRef
  ) { }
  ngOnInit() {
  }
}
