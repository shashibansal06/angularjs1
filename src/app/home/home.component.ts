import { Component, OnInit, ViewChild, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() { }




  public revalScroll() {
    let elements = document.querySelectorAll('[data-reveal]');
    let length = elements.length;
    for (var count = 0; count < length; count++) {
      elements[count].classList.add('visibleHide');
    }
  }

  public reveal() {

    let elements = document.querySelectorAll('[data-reveal]');
    let length = elements.length;



    for (var count = 0; count < length; count++) {

      let temp = <HTMLElement><any>elements[count];
      let top = temp.offsetTop;
      let left = temp.offsetLeft;
      let width = temp.offsetWidth;
      let height = temp.offsetHeight;

      while (temp.offsetParent) {
        temp = <HTMLElement><any>temp.offsetParent;
        top += temp.offsetTop;
        left += temp.offsetLeft;
      }

      if (top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset) {

        let timeDealy = elements[count].getAttribute('data-reveal');
        let animateClass = elements[count].getAttribute('data-class');

        let item = elements[count];
        let delayedObservable = Observable.of(item).delay(parseInt(timeDealy));
        delayedObservable.subscribe(data => {
          data.classList.remove('visibleHide');
          data.classList.add(animateClass);
          data.classList.add('animated');

        });

      }

    }
  }



  ngOnInit() {
    this.revalScroll();
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.reveal();
  }

}
