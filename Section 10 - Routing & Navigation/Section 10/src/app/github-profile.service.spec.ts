import { TestBed, inject } from '@angular/core/testing';

import { GithubProfileService } from './github-profile.service';

describe('GithubProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubProfileService]
    });
  });

  it('should be created', inject([GithubProfileService], (service: GithubProfileService) => {
    expect(service).toBeTruthy();
  }));
});
