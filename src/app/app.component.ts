import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private titleService: Title,
    private resumeService: ResumeService){
    this.titleService.setTitle(this.resumeService.documentTitle);
  }
}
