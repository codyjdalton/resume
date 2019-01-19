import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private titleService: Title,
    private meta: Meta,
    private resumeService: ResumeService){

    this.setHead();
  }

  private setHead() {
    // set title
    this.titleService.setTitle(this.resumeService.documentTitle);

    // set metadata
    this.meta.addTag({
      name: 'description',
      content: this.resumeService.candidate.description 
    });
  }
}
