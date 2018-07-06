import { Component, OnInit, Input, HostListener } from '@angular/core';

import { timer, Subscription, interval, fromEvent } from 'rxjs';
import { throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  @Input() candidate = null;

  public toggled = false;
  public activeTab = 'about';

  private scrollObservable = fromEvent(document, 'scroll');
  private scrollSub: Subscription;
  private isScrolling = false;

  ngOnInit() {
    this.scrollObservable
      .subscribe(
        () => this.setActiveTab()
      );
  }

  setActiveTab() {
    this.activeTab = this.determineActiveTab();
  }

  determineActiveTab() {

    const scrollTop = window.scrollY;
    const aboutPos = document.getElementById('about').offsetTop;
    const expPos = document.getElementById('experience').offsetTop;
    const skillPos = document.getElementById('skills').offsetTop;
    const intPos = document.getElementById('interests').offsetTop;

    if (scrollTop > (intPos - 200)) {
      return 'interests';
    }

    if (scrollTop > (skillPos - 200)) {
      return 'skills';
    }

    if (scrollTop > (expPos - 200)) {
      return 'experience';
    }

    return 'about';
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  close() {
    this.toggled = false;
  }
}
