import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./styles/resume.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent implements OnInit {

  public candidate: any;
  public articles: any[] = [];

  constructor(private http: Http,
    private resumeService: ResumeService) { }

  ngOnInit() {

    // set candidate
    this.candidate = this.resumeService.candidate;

    this.setMedium();
  }

  setMedium() {
    if(this.candidate.mediumUsername) {
      // fetch medium articles
      this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40' + this.candidate.mediumUsername)
        .subscribe(
          data => this.articles = JSON.parse(data['_body']).items.slice(0, 4)
        );
    }
  }
}
