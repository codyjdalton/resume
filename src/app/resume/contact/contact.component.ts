import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResumeService } from '../../services/resume.service';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  public attemptedSubmit: boolean = false;
  public duplicateError: boolean = false;

  constructor(public dialog: MatDialog,
      private fb: FormBuilder,
      private resumeService: ResumeService,
      private coreService: CoreService) {
        this.contactForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          password: [''],
          message: ['', Validators.required],
        });
      }

  ngOnInit() {
  }

  isInvalid(name: string) {
    return Boolean(this.attemptedSubmit &&
      !this.contactForm.controls[name].valid);
  }

  submit(): void {
    this.attemptedSubmit = true;
    this.duplicateError = false;

    if(!this.isInvalid('email') && !this.isInvalid('name') &&
     !this.isInvalid('message')) {

      this.coreService.createLead(this.contactForm.value)
        .subscribe(
          res => this.showSuccess(),
          () => this.duplicateError = true
        );
    }
  }

  showSuccess() {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '32em',
      data: { name: this.contactForm.controls.name.value }
    });

    this.resumeService.showNavigationHighlight = false;

    dialogRef.afterClosed().subscribe(result => {
      this.resumeService.showNavigationHighlight = true;
      console.log('The dialog was closed');
    });
  }
}
