import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,  ActivatedRoute, Event as NavigationEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public isDataHeader = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
