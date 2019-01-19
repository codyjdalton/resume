
import { AfterViewInit, Component, OnInit, Input, HostListener } from '@angular/core';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit, AfterViewInit {

  @Input() candidate = null;

  public toggled = false;
  public activeTab = 'about';

  public scrollObservable: Observable<any> = fromEvent(document, 'scroll');
  public scrollPosMap = new Map();

  private scrollBuffer = 200;

  private scrollKeys = [
    'about',
    'experience',
    'skills',
    'interests'
  ];

  ngOnInit() {
    this.scrollObservable
        .subscribe(
          () => this.setActiveTab()
        );

    this.scrollObservable
        .pipe(
          throttleTime(500)
        )
        .subscribe(
          () => this.setScrollPos()
        );
  }

  ngAfterViewInit() {
    this.setScrollPos();
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

    const keys = this.scrollKeys.filter(() => true).reverse();

    let returnVal = null;

    keys.some(
      (key) => {

        const test = (scrollTop > (this.scrollPosMap.get(key) - this.scrollBuffer));

        returnVal = key;

        return test;
      }
    );
  
    return returnVal;
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
