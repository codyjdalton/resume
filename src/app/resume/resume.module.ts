import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { NavComponent } from './nav/nav.component';

import { DescriptionPipe } from '../pipes/description.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ResumeComponent
  ],
  declarations: [DescriptionPipe, ResumeComponent, NavComponent]
})
export class ResumeModule { }
