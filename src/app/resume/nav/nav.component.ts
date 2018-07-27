import { Component, OnInit, Input, HostListener } from '@angular/core';

import { timer, Subscription, interval, fromEvent } from 'rxjs';
import { throttle, throttleTime, debounceTime } from 'rxjs/operators';

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
  private scrollBuffer = 200;

  private scrollKeys = [
    'about',
    'experience',
    'skills',
    'interests'
  ];
  private scrollPosMap = new Map();

  ngOnInit() {
    this.scrollObservable
      .subscribe(
        () => this.setActiveTab()
      );

    this.setScrollPos();

    this.scrollObservable
        .pipe(
          debounceTime(500)
        )
        .subscribe(
          () => this.setScrollPos()
        );
  }

  /**
   * @method toggle
   * @returns {void}
   */
  toggle() {
    this.toggled = !this.toggled;
  }

  /**
   * @method close
   * @returns {void}
   */
  close() {
    this.toggled = false;
  }

  /**
   * @method setActiveTab
   * @returns {void}
   */
  private setActiveTab(): void {
    this.activeTab = this.determineActiveTab();
  }

  /**
   * @method determineActiveTab
   * @returns {string}
   */
  private determineActiveTab(): string {

    const scrollTop = window.scrollY;

    if (scrollTop > (this.scrollPosMap.get('interests') - this.scrollBuffer)) {
      return 'interests';
    }

    if (scrollTop > (this.scrollPosMap.get('skills') - this.scrollBuffer)) {
      return 'skills';
    }

    if (scrollTop > (this.scrollPosMap.get('experience') - this.scrollBuffer)) {
      return 'experience';
    }

    return 'about';
  }

  /**
   * @method setScrollPos
   * @returns {void}
   */
  private setScrollPos(): void {
    this.scrollKeys.forEach(
      key => {

        const ele = document.getElementById(key);

        if (ele && ele.offsetTop) {
          const elePos = document.getElementById(key).offsetTop;
          this.scrollPosMap.set(key, elePos);
        }
      }
    );
  }
}
