import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  
  let service: ResumeService;

  beforeEach(() => {
    service = TestBed.get(ResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct document title', () => {

    const expected = 'Jane Smith - Sr. Dog Walker - Fakeville, USA';

    // set candidate
    service.candidate.firstName = 'Jane';
    service.candidate.lastName = 'Smith';
    service.candidate.title = 'Sr. Dog Walker';
    service.candidate.address = 'Fakeville, USA';

    expect(service.documentTitle).toEqual(expected);
  });
});
