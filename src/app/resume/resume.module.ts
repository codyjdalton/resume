import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { NavComponent } from './nav/nav.component';

import { DescriptionPipe } from '../pipes/description.pipe';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ResumeComponent
  ],
  declarations: [DescriptionPipe, ResumeComponent, NavComponent, MessageDialogComponent],
  entryComponents: [
    MessageDialogComponent
  ]
})
export class ResumeModule { }
