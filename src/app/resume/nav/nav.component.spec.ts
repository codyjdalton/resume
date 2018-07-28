import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { from } from 'rxjs';

import { NavComponent } from './nav.component';

import { delay } from 'rxjs/operators';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default the active tab to about', () => {

    component.ngOnInit();

    expect(component.activeTab).toEqual('about');
  });

  it('should reverse the toggle position', () => {

    expect(component.toggled).toBe(false);

    component.toggle();

    expect(component.toggled).toBe(true);
  });
});
