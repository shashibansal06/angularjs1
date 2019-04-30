import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbard-header',
  templateUrl: './dashbard-header.component.html',
  styleUrls: ['./dashbard-header.component.scss']
})
export class DashbardHeaderComponent implements OnInit {
  public MenuToggleClass = '';
  constructor() { }

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
}
