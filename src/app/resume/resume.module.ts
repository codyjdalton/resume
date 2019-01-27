import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { NavComponent } from './nav/nav.component';

import { DescriptionPipe } from '../pipes/description.pipe';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ResumeComponent
  ],
  declarations: [DescriptionPipe, ResumeComponent, NavComponent, MessageDialogComponent, ContactComponent],
  entryComponents: [
    MessageDialogComponent
  ]
})
export class ResumeModule { }
