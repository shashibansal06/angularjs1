import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setting-payments',
  templateUrl: './setting-payments.component.html',
  styleUrls: ['./setting-payments.component.scss']
})
export class SettingPaymentsComponent implements OnInit {
  public isEditForm: Boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.isEditForm = (params.edit) ? true : false
    );
  }

  ngOnInit() {
  }

}
