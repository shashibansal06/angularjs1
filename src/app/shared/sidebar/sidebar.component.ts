import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public MenuToggleClass = '';
  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }
  navToggleClass(event) {
    if (this.MenuToggleClass === 'open') {
      this.MenuToggleClass = '';
      document.body.classList.remove('menuOpen');
     // document.querySelector('.back-overlay').classList.remove('openBg');
    } else {
      this.MenuToggleClass = 'open';
      document.body.classList.add('menuOpen');
    //  document.querySelector('.back-overlay').classList.add('openBg');
    }
  }
  logoutModal() {
    const initialState = {
      modalContent: 'Are you sure you want logout?',
      modalImage: 'logout.svg'
    };
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState,
      class: 'customModal'
    });
    this.bsModalRef.content.closeBtnName = 'Logout';
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        console.log('reason');
      })
    );
  }
}
