import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
   // title = 'SalesScanner';
   previousUrl: string;

   constructor(
     private renderer: Renderer2,
     private router: Router,
     ) {
     this.router.events
       .subscribe((event) => {
         if (event instanceof NavigationStart) {
           if (this.previousUrl) {
             // this.renderer.removeClass(document.body, this.previousUrl);
             this.renderer.removeAttribute (document.body, 'id');
           }
           const currentUrlSlug = event.url.slice(1);
           if (currentUrlSlug) {
             // this.renderer.addClass(document.body, currentUrlSlug);
             this.renderer.setAttribute(document.body, 'id', currentUrlSlug);
           }
           this.previousUrl = currentUrlSlug;
         }
       });
   }
  ngOnInit() {
  }


}
