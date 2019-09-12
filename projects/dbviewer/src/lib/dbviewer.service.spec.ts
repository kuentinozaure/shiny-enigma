import { TestBed } from '@angular/core/testing';

import { DbviewerService } from './dbviewer.service';

describe('DbviewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbviewerService = TestBed.get(DbviewerService);
    expect(service).toBeTruthy();
  });
});
