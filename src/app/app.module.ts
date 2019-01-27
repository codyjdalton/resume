import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
