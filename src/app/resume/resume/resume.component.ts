import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./styles/resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  candidate = {
    firstName: 'Cody',
    lastName: 'Dalton',
    email: 'codydevbox@gmail.com',
    address: 'Phoenix, AZ',
    title: 'Software Engineer',
    skills: [
      'javascript',
      'nodejs',
      'postgresql',
      'redis',
      'express',
      'git',
      'mysql',
      'npm',
      'html5',
      'css3',
      'sass',
      'less'
    ],
    workflow: [
      'Agile Development & Scrum',
      'Shared Services Architecture',
      'Test Driven Development',
      'Cross Functional Teams'
    ],
    interests: [
      'Apart from being a software engineer, I spend most of my time reading and going to movies. ' +
      'During summer blockbuster season (when it is too hot to go outside in Phoenix), ' +
      'I am an especially avid movie-goer and even occasionally write reviews when the mood strikes. During the cooler months ' +
      'here in Arizona, I enjoy traveling and sightseeing.',
      'Speaking of going out on the town, when I have collected enough material, I have even been ' +
      'known to try my hand at the occasional stand-up comedy set. This is a rarity as I am not really all that funny.'
    ],
    experience: [
      {
        position: 'Senior Software Engineer',
        employer: 'Glynlyon Inc.',
        dates: {
          start: 'October 2014'
        },
        description: 'Lead on a team of software engineers developing ' +
                     'enterprise Learning Management Platforms. Participate in ' +
                     'architectural planning, sprint planning, reviewing and creating code changes.',
      },
      {
        position: 'Software Engineer',
        employer: 'Giati Group',
        dates: {
          start: 'January 2010',
          end: 'October 2014'
        },
        description: 'Engineer on a team of consultants developing ' +
                     'enterprise e-commerce platforms. Participated in ' +
                     'requirements gathering, 3rd party integrations and custom web solutions.',
      },
      {
        position: 'Software Consultant',
        employer: 'EBS Consulting Group',
        dates: {
          start: 'July 2008',
          end: 'January 2010'
        },
        description: 'Consultant specializing in creating web services and front end ' +
                     'components. Participated in ' +
                     'requirements gathering and general application development.',
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
