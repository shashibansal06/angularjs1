import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,  ActivatedRoute, Event as NavigationEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public MenuToggleClass = '';
  public isDataHeader = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
    .filter((event) => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .map((route) => {
      // tslint:disable-next-line:curly
      while (route.firstChild) route = route.firstChild;
      return route;
    })
    .filter((route) => route.outlet === 'primary')
    .mergeMap((route) => route.data)
    .subscribe((event) => {
      /* if ((event.isDataHeaderObj && event.isDataHeaderObj !== undefined)) {
        // document.getElementById('header').classList.add(event.isDataHeaderObj);
        this.isDataHeader = true;
        console.log('true');

      } else {
        // document.getElementById('header').classList.remove(event.isDataHeaderObj);
        this.isDataHeader = false;
        console.log('false');
      } */
      if ((event.isDataHeaderObj && event.isDataHeaderObj !== false)) {
        this.isDataHeader = true;
        console.log('isDataHeader', this.isDataHeader);
      } else {
        this.isDataHeader = false;
        console.log('isDataHeader', this.isDataHeader);
      }
    });
  }

  ngOnInit() {
  }

  navToggleClass(event) {

    if (this.MenuToggleClass === 'open') {
      this.MenuToggleClass = '';
      document.body.classList.remove('menuOpen');
      document.querySelector('.back-overlay').classList.remove('openBg');
    } else {
      this.MenuToggleClass = 'open';
      document.body.classList.add('menuOpen');
      document.querySelector('.back-overlay').classList.add('openBg');
    }
  }

}
