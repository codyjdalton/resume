import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ResumeComponent
  ],
  declarations: [ResumeComponent, NavComponent]
})
export class ResumeModule { }
