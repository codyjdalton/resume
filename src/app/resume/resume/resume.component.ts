import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./styles/resume.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent implements OnInit {

  public candidate: any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.candidate = this.resumeService.candidate;
  }

}
